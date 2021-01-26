import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classNames from './node_modules/classnames';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import Tile from '../components/Resources/ResourceTile';
import TileTitle from '../components/Resources/ResourceTileTitle';

import attackingSetPlays from '../assets/images/Resources/attackingSetPlays.jpeg';
import creatingFinishing from '../assets/images/Resources/creatingAndFinishing.jpeg';
import defendingCrosses from '../assets/images/Resources/defendingCrosses.jpeg';
import intelligentPressing from '../assets/images/Resources/intelligentPressing.jpeg';
import ADTransitions from '../assets/images/Resources/a-dTransitions.jpeg';

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

    resourceBlock: {
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


export default function FootballInsights() {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container>

                {/*RESOURCE ROW*/}
                <Grid item xs={12} className={classes.resourceContainer}>

                    <Grid item xs={12} className={classes.resourceCategoryHeading}>
                        <h4>HOW WE PLAY</h4>
                    </Grid>

                    <Grid item xs={2} className={classes.resourceBlock}>
                        <Tile
                            imageURL={attackingSetPlays}
                            linkUrl="https://rise.articulate.com/share/afTWMa1xsKul54-_J9EtKn2X17oq-8CX#/">
                            <TileTitle title="ATTACKING" subtitle="SET PLAYS"/>
                        </Tile>
                    </Grid>

                    <Grid item xs={2} className={classes.resourceBlock}>
                        <Tile
                            imageURL={defendingCrosses}
                            linkUrl="https://rise.articulate.com/share/L9jUNhGNUkwQnn1pHwAinNF0SfAg2dFJ#/">
                            <TileTitle title="DEFENDING" subtitle="CROSSES"/>
                        </Tile>
                    </Grid>

                    <Grid item xs={2} className={classes.resourceBlock}>
                        <Tile
                            imageURL={creatingFinishing}
                            variant="Medium"
                            linkUrl="https://rise.articulate.com/share/Z3Ng-UceOmv7Qm6FQGidhZbcH4PWqJx4#/">
                            <TileTitle title="CREATING &" subtitle="FINISHING"/>
                        </Tile>
                    </Grid>

                    <Grid item xs={2} className={classes.resourceBlock}>
                        <Tile
                            imageURL={ADTransitions}
                            linkUrl="https://rise.articulate.com/share/nUcp7Dy3L3Tf-6b_Y4rRF-F-RFCF3Rfa#/">
                            <TileTitle title="A-D" subtitle="TRANSITIONS" />
                        </Tile>
                    </Grid>

                    <Grid item xs={2} className={classes.resourceBlock}>
                        <Tile
                            imageURL={intelligentPressing}
                            linkUrl="https://rise.articulate.com/share/xlD_qF4y3kk-tZ9t-f20nvcPvugI2kxn#/">
                            <TileTitle title="INTELLIGENT" subtitle="PRESSING" />
                        </Tile>
                    </Grid>


                </Grid>
                
            </Grid>

            
        </div>

    )

}


