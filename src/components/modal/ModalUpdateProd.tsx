import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useDispatch } from 'react-redux';
import { updateBasket } from '../../redux/basketSlice';
import { alerShowSet, alertTypeSet } from '../../redux/commonStateSlice';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalUpdateProd: React.FC<any> = ({ open, setOpen, item }) => {

    const dispatch = useDispatch()

    const handleClose = () => {
        
        setOpen(false);
    };

    const update = () => {
        dispatch(updateBasket(item))
        handleClose()
        dispatch(alerShowSet(true))
        dispatch(alertTypeSet('success'))
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Do you want to update?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You currently have the product in 
                        your shopping cart. Do you want to update it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={() => update()}>Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default ModalUpdateProd