import React, { useState } from 'react';
import { useSelector } from 'react-redux'
//import PropTypes from 'prop-types';
//import classNames from './node_modules/classnames';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import Tile from '../components/Reports/ReportsTile';
import TileTitle from '../components/Reports/ReportsTileTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    resourceContainer: {
        padding: '0 20px',
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

    resourceCategoryHeading: {
        display: 'inline-block',
        width: '100%',
        marginTop: 21,
        '& h4':{
            fontSize: 17,
            letterSpacing: 1.5
        }
        
    },

    reportBlock: {
        //mediaQuery
        "@media (max-width: 900px)": {
            maxWidth: '100%',
            flexBasis: '33%'
        },
        "@media (max-width: 600px)": {
            maxWidth: '100%',
            flexBasis: '50%'
        }
    },


}));


export default function ReportsList() {
    
    const classes = useStyles();
    const reports = useSelector(state => state.reports)

    const reportItems = reports.map(report =>
       
        <Grid item xs={2} key={report.id} className={classes.reportBlock}>
            <Tile
                linkUrl={`/report/${report.id}`}
                //imageURL={require(`${report.image}`)}
                >
                <TileTitle title={report.title} subtitle={report.subtitle}/>
            </Tile>
            </Grid>
        
    );

    return (

        <div className={classes.root}>
            <Grid container>

                {/*RESOURCE ROW*/}
                <Grid item xs={12} className={classes.resourceContainer}>

                    <Grid item xs={12} className={classes.resourceCategoryHeading}>
                        <h4>REPORTS</h4>
                    </Grid>

                    { reportItems }

                </Grid>

            </Grid>
        </div>

    )

}


