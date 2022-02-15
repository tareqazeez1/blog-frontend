import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    component: {
        background: '#ffffff',
        color: 'black',
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20,
        }
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
                <Typography>Login</Typography>
            </Toolbar>

        </AppBar>
    );
};

export default Header;