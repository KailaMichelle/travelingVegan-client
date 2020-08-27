import React from 'react';
import { NavLink } from 'react-router-dom';

// FONT AWESOME IMPORTS
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faSignInAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons' 

// MATERIAL UI IMPORTS
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
    AppBar, 
    Toolbar, 
    Button, 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Divider,
    Container 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// ADDITIONAL NAVBAR CSS
import './NavBar.css';

// MATERIAL UI STYLES
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    list2: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    centerNav: {
        marginLeft  : 'auto',
        marginRight : 'auto'
    }
}));

function NavBar({ currentUser, logout }) {
    const anchor = 'right'
    const link = `profiles/${currentUser}`
    const classes = useStyles();
    const [state, setState] = React.useState({right: false,});

    // ICONS
    library.add(faUserPlus, faSignInAlt, faSignOutAlt, faUserCircle); 
    

    // DRAWER
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }  setState({ ...state, [anchor]: open });
    };
    
    //   IF LOGGED IN
    const list = (anchor) => (
    <div
        className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
        <ListItem button component={NavLink} to="/about" color="inherit">
            <ListItemText>About</ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/contact" color="inherit">
            <ListItemText>Contact</ListItemText>
        </ListItem>
        <ListItem button component={NavLink} to="/restaurants" color="inherit">
            <ListItemText>Restaurants</ListItemText>
        </ListItem>
    </List>
    <Divider />
        <List>
            <ListItem button component={NavLink} to={link} color="inherit">
                <ListItemIcon><FontAwesomeIcon icon={['fas', 'user-circle']} /></ListItemIcon>
                <ListItemText>Profile</ListItemText>
            </ListItem>
            <ListItem button onClick={logout} color="inherit">
                <ListItemIcon><FontAwesomeIcon icon={['fas', 'sign-out-alt']} /></ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </ListItem>
        </List>
    </div>
    );
    
    //   IF LOGGED OUT
    const list2 = (anchor) => (
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <ListItem button component={NavLink} to="/about" color="inherit">
                <ListItemText>About</ListItemText>
            </ListItem>
            <ListItem button component={NavLink} to="/contact" color="inherit">
                <ListItemText>Contact</ListItemText>
            </ListItem>
            <ListItem button component={NavLink} to="/restaurants" color="inherit">
                <ListItemText>Restaurants</ListItemText>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button component={NavLink} to="/signup" color="inherit">
                <ListItemIcon><FontAwesomeIcon icon={['fas', 'user-plus']} /></ListItemIcon>
                <ListItemText>Sign Up</ListItemText>
            </ListItem>
            <ListItem button component={NavLink} to="/login" color="inherit">
                <ListItemIcon><FontAwesomeIcon icon={['fas', 'sign-in-alt']} /></ListItemIcon>
                <ListItemText>Login</ListItemText>
            </ListItem>
        </List>
        </div>
    );

    return (
        <div className="navbar">
            <Container fixed> 
                    <Toolbar>
                        <NavLink to="/" className="logo" color="white">Traveling Vegan</NavLink>

                        {/* NAVBAR LOGGED IN */}
                        {currentUser && (
                        <React.Fragment>
                            <IconButton component={NavLink} to={link} className="navbar-items"><FontAwesomeIcon icon={['fas', 'user-circle']} /></IconButton>
                            <IconButton onClick={logout} className="navbar-items"><FontAwesomeIcon icon={['fas', 'sign-out-alt']} /></IconButton>
                        </React.Fragment>
                        )}
                        {currentUser && (
                        <React.Fragment key={anchor}>
                        <IconButton color="inherit" onClick={toggleDrawer(anchor, true)}>
                            <MenuIcon className="navbar-items"/>
                        </IconButton>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                        </React.Fragment>
                        )}

                        {/* NAVBAR NOT LOGGED IN */}
                        {!currentUser && (
                        <React.Fragment>
                            <IconButton component={NavLink} to="/signup" className="navbar-items"><FontAwesomeIcon icon={['fas', 'user-plus']} /></IconButton>
                            <IconButton component={NavLink} to="/login" className="navbar-items"><FontAwesomeIcon icon={['fas', 'sign-in-alt']} /></IconButton>
                        </React.Fragment>
                        )}
                        {!currentUser && (
                        <React.Fragment key={anchor}>
                        <IconButton color="inherit" onClick={toggleDrawer(anchor, true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list2(anchor)}
                        </Drawer>
                        </React.Fragment>
                        )}
                    </Toolbar>
            </Container>
        </div>
    );
}

export default NavBar;