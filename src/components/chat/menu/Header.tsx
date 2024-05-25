import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, styled, IconButton } from '@mui/material';
import { RootState } from '../../../redux/store';
import { Chat as MessageIcon } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
});

const Wrapper = styled(Box)`
    margin-left: auto;
    display: flex;
    align-items: center;
    & > * {
        margin-left: 2px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;

const Header: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    };

    // Ensure hooks are called at the top level
    if (!user) {
        return null;
    }

    return (
        <>
            <Component>
                <Image src={user.picture} alt="User" onClick={toggleDrawer} />
                <Wrapper>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <HeaderMenu />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    );
};

export default Header;
