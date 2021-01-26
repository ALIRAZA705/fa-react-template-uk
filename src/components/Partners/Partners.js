import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import GoogleCloud from '../../assets/icons/google_cloud.png';

const useStyles = makeStyles((theme) => ({

    partnerList: {
        position:'absolute',
        bottom:10,
        right:20,
        '& ul':{
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          '& li':{
            display:'inline-block',
            maxWidth:86,
            marginLeft:45,
            '& img':{
              width:'100%'
            },
            "@media (max-width: 900px)": {
              display:'inline-block',
              maxWidth:63,
              marginLeft:27,
            }
          }
        },
        "@media (max-width: 900px)": {
          bottom:48,
          right:0,
          left:0
        }
  
      }
}));

export default function Partners({color='white'}) {
    const classes = useStyles();
    const theme = useTheme();
    

    return (

            <>
            
            {/*Partner Logos (change from white to dark depending on theme)*/}
                <div className={classes.partnerList}>
                    <ul>
                    <li className={classes.partnerImg}>
                        <a href="https://the-fa.asccloud.com/login" target="blank"><img src={`${theme.partners.ASC}`} alt="ASC Image"/></a>
                    </li>
                    <li className={classes.partnerImg}>
                    <a href="https://platform.wyscout.com/app/?" target="blank"><img src={`${theme.partners.Wyscout}`} alt="Wyscout Image"/></a>
                    </li>
                    <li className={classes.partnerImg}>
                    <a href="https://www.hudl.com/home" target="blank"><img src={`${theme.partners.Hudl}`} alt="Hudl Image"/></a>
                    </li>
                    </ul>
                </div>
            </>     
        
        
        
    );
}