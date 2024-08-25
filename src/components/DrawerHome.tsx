import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import PointOfSaleSharpIcon from '@mui/icons-material/PointOfSaleSharp';
import FeedSharpIcon from '@mui/icons-material/FeedSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import getStorage from '../utils/storage/getStorage';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useNavigate } from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function DrawerHome({ setShowCart, setAlertOpen }: { setShowCart: any, setAlertOpen: any }) {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navigate = useNavigate()
  const handelShowCart = (index: number) => {
    const login = getStorage("login")
    if (index === 0) {
      login ? setShowCart(true) : setAlertOpen(true)
    }
    if (index === 1) { }
    if (index === 2) {
      navigate("/login")
    }
    if (index === 3) {
      localStorage.removeItem("login")
    }
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };



  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Categories', 'Deals', "What's New", 'Delivery'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <CategorySharpIcon />}
                {index === 1 && <PointOfSaleSharpIcon />}
                {index === 2 && <FeedSharpIcon />}
                {index === 3 && <LocalShippingSharpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Cart', 'Account', "Login", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton onClick={() => handelShowCart(index)}>
              <ListItemIcon>
                {index === 0 && <ShoppingCartSharpIcon />}
                {index === 1 && <PersonOutlineSharpIcon />}
                {index === 2 && <LoginSharpIcon />}
                {index === 3 && <LogoutSharpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className='text-black' /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}