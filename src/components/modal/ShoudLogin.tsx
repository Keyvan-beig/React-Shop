import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface typeProp {
    open: boolean
    setOpen: (open: boolean) => void
}

const ShoudLogin: React.FC<typeProp> = ({ open, setOpen }) => {

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Login Error!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You must login to view the current page!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ShoudLogin