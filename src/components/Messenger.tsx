import React from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LoginDialog from './account/LoginDialog';
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
  height: 100vh;
  background: #DCDCDC;
`;

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00CED1;
  box-shadow: none;
`;

const Messenger: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      {isAuthenticated ? <ChatDialog /> : <LoginDialog />}
    </Component>
  );
};

export default Messenger;
