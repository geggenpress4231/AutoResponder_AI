import React from 'react';
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Correctly import jwtDecode as a named import
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';

const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
};

const Component = styled(Box)`
  display: flex;
`;

const QRCode = styled('img')({
  height: 264,
  width: 264,
  margin: '0 0 0 50px'
});

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  &>li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const LoginDialog: React.FC = () => {
  const dispatch = useDispatch();

  const onLoginSuccess = (res: any) => {
    const decoded = jwtDecode(res.credential); // Use jwtDecode correctly
    dispatch(loginSuccess(decoded));
    console.log(decoded);
  };

  const onLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To Use this on Computer:</Title>
          <StyledList>
            <ListItem>1. Open the app on your phone</ListItem>
            <ListItem>2. Tap Menu Settings</ListItem>
            <ListItem>3. Point the phone to your screen scan QR</ListItem>
          </StyledList>
        </Container>
        <Container>
          <QRCode src={qrCodeImage} alt="QRcode" />
          <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-315%)' }}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Container>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
