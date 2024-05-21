import React from 'react';
import LoginDialog from './account/LoginDialog';
import { AppBar,Toolbar,styled,Box } from '@mui/material';
import ChatDialog from './chat/chatDialog';

const Component=styled(Box)`
height:100vh;
background:#DCDCDC;
`

const Header= styled(AppBar)`
height:220px;
background-color: #00CED1;
box-shadow: none;`

const Messenger: React.FC = () => {
    return (
        <Component>
         <Header>
            <Toolbar></Toolbar>
        </Header>
        <LoginDialog/>
    
        </Component>
    );
       
}

export default Messenger;
