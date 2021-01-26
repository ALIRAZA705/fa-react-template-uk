import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    blockLabelMedium: {
        background: 'none',
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
    blockLabelTextWithBorder: {
        display: 'inline-block',
        width: '100%',
        padding: 0,
        letterSpacing: 1,
        lineHeight: '19px',
        fontSize: 14,
        textAlign: 'center',
        color: theme.typography.headingColor
    },
    blockLabelTextBold: {
        display: 'block'
    },
}));

export default function ReportsTileTitle({ variant = 'Medium', title, subtitle, textBorder = 'WithBorder' }) {
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