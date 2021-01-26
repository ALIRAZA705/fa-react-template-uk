import React from 'react';
import { makeStyles } from '@material-ui/core';
import EnglandCrest from '../EnglandCrest';

import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  userWrap: {
    width: '235px',
    height: '51px',
    borderRadius: '27px',
    backgroundColor: theme.userArea.pillBG,
    position: 'absolute',
    right: 10,
    top: 30,
    '& ul': {
      listStyle: 'none',
      margin: 0,
      marginTop: 10
    },
    "@media (max-width: 900px)": {
      top: 10,
    }
  },
  userName: {
    height: '12px',
    fontSize: '10px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 'normal',
    letterSpacing: '1.33px',
    textAlign: 'right',
    width: 128,
    color: theme.userArea.pillColor,
    marginBottom: 3,

  },
  signInOt: {
    height: '17px',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.87px',
    textAlign: 'right',
    width: 128,
    color: theme.userArea.signInOutColour,
  },
  userCrest: {
    float: 'right',
    marginTop: '-33px',
    marginRight: '23px',
    '& g': {
      fill: theme.userArea.crestColor,
    }


  }
}));

export default function UserDetails({ accountInfo, logout, color = 'white' }) {
  const classes = useStyles();

  const CREST_SIZE = {
    small: 35,
    default: 70,
    large: 90
  }

  let name = accountInfo?.account?.name;

  return (
    <>
      {/*Partner Logos (change from white to dark depending on theme)*/}
      <div className={classes.userWrap}>
        <ul>
          <li className={classes.userName}>
            {name}
          </li>
          <li className={classes.signInOt}>
            <Button size="small" onClick={logout}>SIGN OUT</Button>
          </li>
        </ul>
        <EnglandCrest
          width={CREST_SIZE['small']}
          height={CREST_SIZE['small']}
          fillColor={classes.userCrest}
          className={classes.userCrest}
        />
      </div>
    </>
  );
}