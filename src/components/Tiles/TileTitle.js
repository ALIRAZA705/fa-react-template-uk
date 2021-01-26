import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    blockLabelLarge: {
        color: theme.tabBlock.textColor,
        background: theme.tabBlock.textBG,
        padding: '28px 0px',
        minHeight: 104,
        '&:hover': {
            borderColor: 'red'
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
    blockLabelMedium: {
        color: theme.tabBlock.textColor,
        background: theme.tabBlock.textBG,
        padding: '14px 0px',
        minHeight: 76,
        '&:hover': {
            borderColor: 'red'
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
    blockLabelSmall: {
        color: theme.tabBlock.smallBlockTextColor,
        minHeight: 0,
        position: 'absolute',
        bottom: 16,
        width: '100%',
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
    blockLabelTextWithBorder: {
        display: 'inline-block',
        width: '100%',
        borderLeft: theme.tabBlock.textBorderLeft,
        padding: '2px 20px',
        letterSpacing: 2.4,
        lineHeight: '21px'
    },
    blockLabelTextNoBorder: {
        display: 'inline-block',
        width: '100%',
        padding: '2px 12px',
        letterSpacing: 2.4,
        lineHeight: '21px',
        fontWeight: 'bold'
    },
    blockLabelTextBold: {
        display: 'block'
    },
}));

export default function TileTitle({ variant = 'Medium', title, subtitle, textBorder = 'WithBorder' }) {
    const classes = useStyles();

    return (
        <>
            <div className={`${classes[`blockLabel${variant}`]}`}>
                <Typography className={`${classes[`blockLabelText${textBorder}`]}`}>
                        {title}
                        {subtitle && <strong className={classes.blockLabelTextBold}>{subtitle}</strong>}
                </Typography>
            </div>
        </>
    );
}