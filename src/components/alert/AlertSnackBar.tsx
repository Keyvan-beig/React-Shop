import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alerShowSet, commonState } from '../../redux/commonStateSlice';

const AlertSnackBar = () => {

  // const [open, setOpen] = useState(true)
  const commonStt = useSelector(commonState)
  const dispatch = useDispatch()

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    
    // setOpen(false);
    dispatch(alerShowSet(false))
  };

  return (
    <div>
      <Snackbar open={commonStt.alert.alertShow} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={commonStt.alert.alertType}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {commonStt.alert.alertType}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertSnackBar