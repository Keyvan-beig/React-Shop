import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ErrorDialog({ message } : { message : string}) {

    return (
        <>
            <Dialog
                open={true}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                {message === "TypeError: Failed to fetch" ? "Check your conection" : "Error please try again!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => location.reload()}>
                        Try Again
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}