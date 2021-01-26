import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

export default function HomeTiles() {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <p>Admin Area</p>
        </div>

    )

}


