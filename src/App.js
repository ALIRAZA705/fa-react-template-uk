import React from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { Route, Switch, withRouter, useLocation } from 'react-router-dom';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Box, Button, Container, AppBar, Tab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FATabs } from './components/Tabs/FATabs';
import Partners from './components/Partners/Partners';
import Header from './components/Header';
import HomeTab from './components/Tabs/HomeLayout';
import AdminTab from './components/Tabs/AdminLayout';

import FootballInsights from './routes/football-insights';
import Reports from './routes/reports';
import { ReportSingle } from './routes/reportSingle';

import MensTheme from './themes/mens';
import WomensTheme from './themes/womens';

import { getAuthInfo } from './store/actions/auth';

import { authProvider } from './authProvider';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 38,
    fontWeight: "300",
    fontStyle: "normal",
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App(props) {
  const classes = useStyles();

  const store = useStore();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { state: authState } = auth;
  React.useEffect(() => {
    console.log('auth state changed', authState);
    if (authState === AuthenticationState.Authenticated) {
      console.log('user is authenticated, initialse the application');
      dispatch(getAuthInfo());
    }
  }, [authState, dispatch]);

  return (
    <>
      <div className={classes.backgroundShirt}></div>
      <div className={classes.backgroundLines}></div>

      <AzureAD provider={authProvider} reduxStore={store}>
        {({ accountInfo, authenticationState, error, login, logout }) => {
          if (authenticationState === AuthenticationState.Unauthenticated || authenticationState === AuthenticationState.InProgress) {
            // if (false) {
            return (
              // <Login />
              <Box height="100vh" width={'100vw'} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Typography className={classes.title} variant="h4" gutterBottom>HELIX</Typography>
                <Button variant="contained" color="primary" onClick={login}>Login</Button>
              </Box>
            );
          } else {
            return (
              <>
                <Header accountInfo={accountInfo} logout={logout} />
                <Container maxWidth={false} className={`${classes.addedHeight} ${classes.container}`}>
                  <TabNavigation />
                  <Switch>
                    <Route path="/football-insights" component={FootballInsights} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/admin" component={AdminTab} />
                    <Route exact path="/report/:reportId" component={ReportSingle} />
                    <Route path="/" component={HomeTab} />

                  </Switch>
                </Container>
              </>
            )
          }
        }}
      </AzureAD>
    </>
  );
}

const TabNavigation = withRouter((props) => {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    //setValue(newValue);
    props.history.push(newValue)
  };

  return (
    <AppBar position="static" className={`${classes.tabNavWrap} ${classes.transparent}`}>
      {/*Tab Menu Items*/}
      <FATabs value={props.history.location.pathname} onChange={handleChange} className={classes.tabNavBorder} aria-label="content tabs">
        <Tab value="/" className={classes.tabBtn} label="Home" {...a11yProps(0)} />
        {/* <Tab value="/admin" className={classes.tabBtn} label="Admin" {...a11yProps(1)} />*/}
      </FATabs>
    </AppBar>
  )
})

const ThemedApp = () => {
  const location = useLocation();

  const settings = useSelector((state) => state.settings);

  let theme = MensTheme;

  let themes = {
    mens: MensTheme,
    womens: WomensTheme
  }

  if (settings) {
    if (settings.theme) {
      theme = themes[settings.theme];
      localStorage.setItem('helix-theme', settings.theme);
    }
  }

  // If there's a querystring then override the user attributes
  if (localStorage.getItem('helix-theme')) {
    theme = themes[localStorage.getItem('helix-theme')];
  }

  var params = new URLSearchParams(location.search)

  if (params.has('theme')) {
    if (params.get('theme').toLowerCase() === 'mens' || params.get('theme').toLowerCase() === 'womens') {
      theme = themes[params.get('theme')]
      localStorage.setItem('helix-theme', params.get('theme'));
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

export default (ThemedApp);