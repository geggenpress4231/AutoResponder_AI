import React from 'react';
import { Drawer,Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

interface InfoDrawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const InfoDrawer: React.FC<InfoDrawerProps> = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer 
        open={open} 
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
        >
            <Box>
                <ArrowBack onClick={()=>setOpen(false)}/>
            </Box>
        </Drawer>
    );
};

export default InfoDrawer;
