import React from 'react';
import { makeStyles, Link as MuiLink } from '@material-ui/core';
import {useHistory, Link} from 'react-router-dom';
import { CallMissedSharp } from '@material-ui/icons';

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
            '& $blockImgLarge': {
                borderColor: 'red',
            },
            '& $blockImgMedium': {
                borderColor: 'red'
            },
            '& $blockBGImg': {
                transform: 'scale(1.2)'
            },
            '& $comingSoon': {
                opacity: 1,
                zIndex:999
            }
            
        }
        

    },
    blockImgLarge: {
        minHeight: '50vh',
        overflow: 'hidden',
        borderBottom: theme.tabBlock.textBorderTop,
        position: 'relative',
        //mediaQuery
        "@media (max-width: 900px)": {
            minHeight: 250,
        }

    },
    blockImgMedium: {
        minHeight: '30vh',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: theme.tabBlock.textBorderTop
    },
    blockImgSmall: {
        minHeight: '20vh',
        overflow: 'hidden',
        position: 'relative',
    },
    blockBGImg:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#2f446c',
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        transition: '1s'
    },
    comingSoon:{
        width: '105%',
        opacity: 0,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        transition: '.5s ease',
        height: '102%',
        background: theme.tabBlock.comingSoonBG,
        top: '50%',
        left: '49%',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'rgb(255 255 255 / 85%)',
        letterSpacing: '1px',
        lineHeight: '25px',
        display:'table',
        '& span':{
            display:'table-cell',
            verticalAlign:'middle'
        }
    }

}));


export default function Tile({ children, variant = 'Medium', imageClass, linkUrl, externalLink=true, contentComingSoon=false }) {
    const classes = useStyles();
    //const history = useHistory();

    const content = ()=>{
        //display coming soon overlay in tile
        if (contentComingSoon) {
            return(
                <>
                {/*BACKGROUND IMAGE*/}
                    <div className={classes[`blockImg${variant}`]}>
                                <div className={`${imageClass} ${classes.blockBGImg}`} />
                                <div className={classes.comingSoon}><span>COMING SOON</span></div>
                    </div>
                            {children}
                </>
            )
          } else {
            return(
                <>
                {/*BACKGROUND IMAGE*/}
                    <div className={classes[`blockImg${variant}`]}>
                                <div className={`${imageClass} ${classes.blockBGImg}`} />
                    </div>
                            {children}
                </>
            )
          }
    }


    return (
        <>
            <div className={classes.paper}>
                <div className={classes.blockWrap}>


                    {externalLink ?(
                        <MuiLink href={linkUrl} color="inherit" target="_blank" rel="noopener">
                        {content()}
                        </MuiLink>
                    ):(
                        <Link to={linkUrl} color="inherit">
                            {content()}
                        </Link>
                    )}
                    
                    
                    
                </div>
            </div>
        </>
    );
}