import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getStorage from '../../utils/storage/getStorage';
import logOutAcount from './logOutAcount';


interface propType {
    setEditeUser: (editeUser: boolean) => void
    setAlertOpen: (alertOpen: boolean) => void
}

const BasicMenu: React.FC<propType> = ({ setEditeUser, setAlertOpen }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handelAcount = () => {
        const login = getStorage("login")
        handleClose()
        if (login) {
            setEditeUser(true)
        } else {
            setAlertOpen(true)
        }
    }

    return (
        <div>
            <Button
                style={{ color: "black", fontWeight: "bold" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <RxPerson className='mx-1 text-[16px]' /> Account
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handelAcount}>Profile</MenuItem>
                <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                <MenuItem onClick={() => logOutAcount(dispatch)}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default BasicMenu