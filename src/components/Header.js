// Common Imports
import React from 'react';
import classNames from 'classnames';

// Material Imports
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// Component Imports
import UserDetails from './UserDetails';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    transparent: {
        background: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        letterSpacing: 13,
        textAlign: 'center',
        padding: 38,
        paddingTop: 72,
        color: theme.typography.headingColor

    },
    titlesmall: {
        flexGrow: 1,

    },
    '@media print': {
        infoButton: {
            display: 'none'
        }
    }
}));

const Header = ({ variant = 'default', accountInfo, logout }) => {
    const classes = useStyles();

    return (
        <AppBar elevation={0} position="static" className={classes.transparent} >
            <Toolbar variant="dense">
                <Typography variant={variant === 'small' ? 'h5' : 'h4'} className={classNames(classes.title, classes[`title${variant}`])}>
                    HELIX
                </Typography>

                <UserDetails accountInfo={accountInfo} logout={logout} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;