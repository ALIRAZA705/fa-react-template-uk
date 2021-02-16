import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import getMuiTheme from './../../styles/Overridestyles'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { FormControl, FormLabel } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import logo from './logo.jpg';

const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: "7px"
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `#1699D4`,
        marginTop: "16px",

    },
}));







function ClubInfo(props) {
    const { row } = props;
    const classes = useStyles();

    return (
        // <MuiThemeProvider theme={getMuiTheme()}>
            <Box margin={1} >
                <Typography variant="h6" gutterBottom component="div" marginRight={0}>
                    Club Info
            </Typography>

                {/* <Table size="small" aria-label="purchases" className={classes.SubTable} style={{marginLeft:"26px",border:"2px solid white"}} > */}

                    {/* <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} /> */}


                  <div 
                //   style={{borderRight:"1px solid white",borderTop:"1px solid white"}}
                  >

                            <Grid container direction="row" alignItems="center" justify="center">
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} />
                                <FormLabel style={{ color: "white" }}>Premier League</FormLabel>
                            </Grid>
<br/>
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} />
                                <FormLabel style={{ color: "white" }}>Premier League</FormLabel>
                            </Grid>

                            <Grid container direction="row" alignItems="center" justify="center">
                            <a href="www.Icfc.com" className={classes.linkText} target="_blank"> www.Icfc.com</a>
                            </Grid>

                          
                        <br/>
                        <Grid container direction="row" alignItems="center" justify="center">
                                <img src={logo} alt="Logo" style={{ width: "80px" }} />
                                {/* <FormLabel  > Leicester City Football Club </FormLabel> */}
                                {/* <p style={{ color: "white", marginLeft: "10px" }}>Leicester City Football Club <br />King Power Stadium <br />Filbert Way</p> */}
                            </Grid>
                
                            <Grid container direction="row" alignItems="center" justify="center">
                            <a href="www.Icfc.com" className={classes.linkText} target="_blank"> www.Icfc.com</a>
                            </Grid>
                            </div>

                    {/* 
      </Container>
    </React.Fragment>
                       */}

                    {/* <TableHead >
                            <TableRow >
                               
    

                               
                                <TableCell >Date</TableCell>
                                <TableCell>Club</TableCell>
                                <TableCell align="left">Staff</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody  >
                   

                            {row.engagementHistory.map((historyRow) => (
                                <TableRow key={historyRow.date}>

                                    
                                    <TableCell component="th" scope="row">
                                        {historyRow.date}
                                    </TableCell>
                                    <TableCell>{historyRow.contact}</TableCell>
                                    <TableCell align="left">{historyRow.staff}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table> */}
                {/* </Table> */}
            </Box>
        // </MuiThemeProvider>

    )
}
export default ClubInfo
