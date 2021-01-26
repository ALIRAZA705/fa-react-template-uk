import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useTheme } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

import Tile from '../Tiles/Tile';
import TileTitle from '../Tiles/TileTitle';

import GoogleCloud from '../../assets/icons/google_cloud.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    cardContainer: {
        padding: 0,
        display: 'flex',
        flexWrap: 'inherit',
        opacity: 0,
        animationName: '$fade',
        animationDuration: '1.5s',
        animationDelay: '0',
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        //mediaQuery
        "@media (max-width: 900px)": {
            maxWidth: '100%',
            flexBasis: '100%'
        },
    },

    '@keyframes fade': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },

    cloudIcon: {
        float: 'right',
        textAlign: 'left',
        width: '100%',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        '& img': {
            height: 50,
            display: 'inline-block',
            marginRight: -18,
            marginBottom: -12
        },
        '& span': {
            display: 'inline-block',
            fontSize: 13
        }
    },
}));


export default function HomeTiles() {

    const classes = useStyles();

    return (

        <div className={classes.root}>

        </div>

    )

}


