import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

interface propType {
    setEditeUser: (editeUser: boolean) => void
}

const BasicMenu: React.FC<propType> = ({ setEditeUser }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setEditeUser(true)
        setAnchorEl(null);
    };

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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                <MenuItem onClick={() => localStorage.removeItem("login")}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default BasicMenu