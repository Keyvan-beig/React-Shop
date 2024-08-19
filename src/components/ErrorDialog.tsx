import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';

// function PaperComponent(props: PaperProps) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }

export default function ErrorDialog({ message } : { message : string}) {

    return (
        <React.Fragment>
            <Dialog
                open={true}
                // onClose={handleClose}
                // PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                {message === "TypeError: Failed to fetch" && "Check your conection"}
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
        </React.Fragment>
    );
}