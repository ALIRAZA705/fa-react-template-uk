import React from 'react';
import { makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';

import ShieldImage from '../../assets/images/DarkTheme/shield.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 12,
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    blockWrap: {
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover': {
            '& $blockImgMedium': {
                borderColor: 'red'
            },
            '& $blockBGImg': {
                transform: 'scale(1.2)'
            }  
        }
    },
    blockImgMedium: {
        overflow: 'hidden',
        borderBottom: '2px solid #b0252e'
    },
    blockBGImg:{
        width: '100%',
        height: 'auto',
        transition: '1s',
        '& img':{
            width:'100%',
            display: 'block'
        }
    }

}));

export default function ReportsTile({ children, variant = 'Medium', imageClass, imageURL =`${ShieldImage}`, linkUrl }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.paper}>
                <div className={classes.blockWrap}>
                    <Link to={linkUrl} color="inherit" rel="noopener">
                        <div className={classes[`blockImg${variant}`]}>
                            <div className={`${imageClass} ${classes.blockBGImg}`} >
                                <img src={`${imageURL}`}/>
                            </div>
                        </div>
                        {children}
                    </Link>
                </div>
            </div>
        </>
    );
}