import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: 38,
      fontWeight: "300",
      fontStyle: "italic",
      letterSpacing: 13,
      textAlign: "center",
      color: theme.typography.headingColor
    },
    container: {
      opacity: 0,
      animationName: '$fade',
      animationDuration: '1s',
      animationDelay: '1.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards'
    },
    backgroundShirt: {
      height: '100%',
      width: '100%',
      zIndex: '-1',
      position: 'absolute',
      backgroundImage: theme.background.imageFade,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundAttachment: 'fixed',
      opacity: theme.background.shirtOpacity,
    },
    '@keyframes fade': {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    '@keyframes scale': {
      from: { opacity: 0 },
      to: { opacity: theme.background.lineOpacity, transform: 'scaleX(1)' }
    },
    backgroundLines: {
      height: '100%',
      width: '100%',
      zIndex: '0',
      position: 'absolute',
      backgroundImage: theme.background.imageLines,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundAttachment: 'fixed',
      opacity: 0,
      transform: 'scaleX(2.5)',
      animationName: '$scale',
      animationDuration: '1.5s',
      animationIterationCount: 1,
      animationFillMode: 'forwards'
    },
    addedHeight: {
      minHeight: '85vh'
    },
    transparent: {
      background: 'none',
    },
    tabNavWrap: {
      boxShadow: 'none',
      position: 'relative'
    },
    tabNavBorder: {
      //background: theme.tab.tabBorder,
    },
    tabBtn: {
      letterSpacing: 1.6,
      minWidth: 0,
      padding: '6px 16px',
      marginRight: 35,
      color: theme.tab.tabColor
    },
    partnerList: {
      position: 'absolute',
      bottom: 10,
      right: 20,
      '& ul': {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        '& li': {
          display: 'inline-block',
          maxWidth: 86,
          marginLeft: 45,
          '& img': {
            width: '100%'
          },
          "@media (max-width: 900px)": {
            display: 'inline-block',
            maxWidth: 63,
            marginLeft: 27,
          }
        }
      },
      "@media (max-width: 900px)": {
        bottom: 48,
        right: 0,
        left: 0
      }
  
    }
  }));
  
function Test (){
    const classes =useStyles();
    return(
        <div className={classes.title}>
ALI HOME  HELIX
        </div>
    )
}
export default Test