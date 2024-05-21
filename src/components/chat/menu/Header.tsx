import React from 'react';
import { useSelector } from 'react-redux';
import { Box, styled } from '@mui/material';
import { RootState } from '../../../redux/store'; // Adjust the path as needed

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return null;
  }

  return (
    <Component>
      <Image src={user.picture} alt="User" />
    </Component>
  );
};

export default Header;
