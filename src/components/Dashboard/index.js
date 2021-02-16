import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import "../../App.css";
import { makeStyles, fade, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { FormControl, FormLabel } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import EngagamentsMain from "../EngagementsMain"
const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: 20,
        //   marginLeft:"0px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    large: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: "7px"
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),

    },
}));
const getMuiTheme = () =>
    createMuiTheme({
        overrides: {

            MuiPaper: {
                root: {

                    backgroundColor: "#03162e ! important",
                    color: "white ! important"

                },
            },

        }

    });
function Dashboard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const theme = useTheme();
    const fabs = {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
        label: 'Add',
    }
    const AntSwitch = withStyles((theme) => ({
        root: {
            width: 28,
            height: 16,
            padding: 0,
            display: 'flex',
        },
        switchBase: {
            padding: 2,
            color: theme.palette.grey[500],
            '&$checked': {
                transform: 'translateX(12px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                },
            },
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: 'none',
        },
        track: {
            border: `1px solid ${theme.palette.grey[500]}`,
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: theme.palette.common.white,
        },
        checked: {},
    }))(Switch);
    return (
        <MuiThemeProvider theme={getMuiTheme()}>

            <>
                {/* <div className="Horizontal_Scroll_view "> */}
                <Carousel breakPoints={breakPoints}>
                    <Card className={classes.root}>

                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant="h5" component="h5" style={{ paddingLeft: "12px", marginTop: "10px" }} color="white" gutterBottom>
                                    Justin Bowley
        </Typography>
                            </Grid>
                            <Grid item>
                                <Fab size="small" aria-label={fabs.label} color={fabs.color} >
                                    {fabs.icon}
                                </Fab>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >


                            <Grid item  >
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} style={{ paddingLeft: "10px" }} />
                            </Grid>

                            <Grid item  >
                                <FormLabel style={{ color: "white", margin: "20px", marginLeft: "0px" }}>Leicester City Football Club</FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            spacing={3}
                        >
                            <h5 style={{ marginLeft: "27px" }}>Roles :</h5>
                            <h5 style={{ marginLeft: "7px", marginRight: "17px" }}>GoalKeeping Coach </h5>
                            <h5 style={{ marginRight: "27px" }}>GoalKeeping Coach </h5>
                        </Grid>
                        <hr />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}>@  Justin_bowley.com</h5>
                            </Grid>
                            {/* <Grid item> */}
                            {/* <PhoneIcon style={{ marginLeft: "20px", marginTop: "0px" }} /> */}
                            {/* </Grid> */}
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}> +4407480769082</h5>
                            </Grid>
                        </Grid>

                    </Card>
                    <Card className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant="h5" component="h5" style={{ paddingLeft: "12px", marginTop: "10px" }} color="white" gutterBottom>
                                    Justin Bowley
        </Typography>
                            </Grid>
                            <Grid item>
                                <Fab size="small" aria-label={fabs.label} color={fabs.color} >
                                    {fabs.icon}
                                </Fab>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >


                            <Grid item  >
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} style={{ paddingLeft: "10px" }} />
                            </Grid>

                            <Grid item  >
                                <FormLabel style={{ color: "white", margin: "20px", marginLeft: "0px" }}>Leicester City Football Club</FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            spacing={3}
                        >
                            <h5 style={{ marginLeft: "27px" }}>Roles :</h5>
                            <h5 style={{ marginLeft: "7px", marginRight: "17px" }}>GoalKeeping Coach </h5>
                            <h5 style={{ marginRight: "27px" }}>GoalKeeping Coach </h5>
                        </Grid>
                        <hr />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={7}
                        >
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}>@  Justin_bowley.com</h5>
                            </Grid>
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}> +4407480769082</h5>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant="h5" component="h5" style={{ paddingLeft: "12px", marginTop: "10px" }} color="white" gutterBottom>
                                    Justin Bowley
        </Typography>
                            </Grid>
                            <Grid item>
                                <Fab size="small" aria-label={fabs.label} color={fabs.color} >
                                    {fabs.icon}
                                </Fab>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >


                            <Grid item  >
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} style={{ paddingLeft: "10px" }} />
                            </Grid>

                            <Grid item  >
                                <FormLabel style={{ color: "white", margin: "20px", marginLeft: "0px" }}>Leicester City Football Club</FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            spacing={3}
                        >
                            <h5 style={{ marginLeft: "27px" }}>Roles :</h5>
                            <h5 style={{ marginLeft: "7px", marginRight: "17px" }}>GoalKeeping Coach </h5>
                            <h5 style={{ marginRight: "27px" }}>GoalKeeping Coach </h5>
                        </Grid>
                        <hr />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={7}
                        >
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}>@  Justin_bowley.com</h5>
                            </Grid>
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}> +4407480769082</h5>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant="h5" component="h5" style={{ paddingLeft: "12px", marginTop: "10px" }} color="white" gutterBottom>
                                    Justin Bowley
        </Typography>
                            </Grid>
                            <Grid item>
                                <Fab size="small" aria-label={fabs.label} color={fabs.color} >
                                    {fabs.icon}
                                </Fab>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >


                            <Grid item  >
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} style={{ paddingLeft: "10px" }} />
                            </Grid>

                            <Grid item  >
                                <FormLabel style={{ color: "white", margin: "20px", marginLeft: "0px" }}>Leicester City Football Club</FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            spacing={3}
                        >
                            <h5 style={{ marginLeft: "27px" }}>Roles :</h5>
                            <h5 style={{ marginLeft: "7px", marginRight: "17px" }}>GoalKeeping Coach </h5>
                            <h5 style={{ marginRight: "27px" }}>GoalKeeping Coach </h5>
                        </Grid>
                        <hr />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={7}
                        >
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}>@  Justin_bowley.com</h5>
                            </Grid>
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}> +4407480769082</h5>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.root}>
                    <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant="h5" component="h5" style={{ paddingLeft: "12px", marginTop: "10px" }} color="white" gutterBottom>
                                    Justin Bowley
        </Typography>
                            </Grid>
                            <Grid item>
                                <Fab size="small" aria-label={fabs.label} color={fabs.color} >
                                    {fabs.icon}
                                </Fab>
                            </Grid>
                        </Grid>

                      
                      
                      
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >


                            <Grid item  >
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} style={{ paddingLeft: "10px" }} />
                            </Grid>

                            <Grid item  >
                                <FormLabel style={{ color: "white", margin: "20px", marginLeft: "0px" }}>Leicester City Football Club</FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            spacing={3}
                        >
                            <h5 style={{ marginLeft: "27px" }}>Roles :</h5>
                            <h5 style={{ marginLeft: "7px", marginRight: "17px" }}>GoalKeeping Coach </h5>
                            <h5 style={{ marginRight: "27px" }}>GoalKeeping Coach </h5>
                        </Grid>
                        <hr />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={7}
                        >
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}>@  Justin_bowley.com</h5>
                            </Grid>
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}> +4407480769082</h5>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.root}>
                    <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant="h5" component="h5" style={{ paddingLeft: "12px", marginTop: "10px" }} color="white" gutterBottom>
                                    Justin Bowley
        </Typography>
                            </Grid>
                            <Grid item>
                                <Fab size="small" aria-label={fabs.label} color={fabs.color} >
                                    {fabs.icon}
                                </Fab>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >


                            <Grid item  >
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} style={{ paddingLeft: "10px" }} />
                            </Grid>

                            <Grid item  >
                                <FormLabel style={{ color: "white", margin: "20px", marginLeft: "0px" }}>Leicester City Football Club</FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            spacing={3}
                        >
                            <h5 style={{ marginLeft: "27px" }}>Roles :</h5>
                            <h5 style={{ marginLeft: "7px", marginRight: "17px" }}>GoalKeeping Coach </h5>
                            <h5 style={{ marginRight: "27px" }}>GoalKeeping Coach </h5>
                        </Grid>
                        <hr />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={7}
                        >
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}>@  Justin_bowley.com</h5>
                            </Grid>
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}> +4407480769082</h5>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={classes.root}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                         <Grid item>
                                <Typography variant="h5" component="h5" style={{ paddingLeft: "12px", marginTop: "10px" }} color="white" gutterBottom>
                                    Justin Bowley
        </Typography>
                            </Grid>
                            <Grid item>
                                <Fab size="small" aria-label={fabs.label} color={fabs.color} >
                                    {fabs.icon}
                                </Fab>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >


                            <Grid item  >
                                <Avatar alt="Remy Sharp" src="lc.png" className={classes.large} style={{ paddingLeft: "10px" }} />
                            </Grid>

                            <Grid item  >
                                <FormLabel style={{ color: "white", margin: "20px", marginLeft: "0px" }}>Leicester City Football Club</FormLabel>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            spacing={3}
                        >
                            <h5 style={{ marginLeft: "27px" }}>Roles :</h5>
                            <h5 style={{ marginLeft: "7px", marginRight: "17px" }}>GoalKeeping Coach </h5>
                            <h5 style={{ marginRight: "27px" }}>GoalKeeping Coach </h5>
                        </Grid>
                        <hr />
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={7}
                        >
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}>@  Justin_bowley.com</h5>
                            </Grid>
                            <Grid item>
                                <h5 style={{ marginTop: "0px" }}> +4407480769082</h5>
                            </Grid>
                        </Grid>
                    </Card>


                </Carousel>
                {/* </div> */}
                <Grid
                    container
                    direction="row"
                    justify="center" alignItems="center"
                >
                    <Grid item >
                        <Typography component="div" style={{ marginTop: "30px", marginRight: "20px", color: "white", marginBottom: "20px" }}>
                            <Grid component="label" container alignItems="flex-end" spacing={1}>
                                <Grid item>My Engagements</Grid>
                                <Grid item>
                                    <AntSwitch />
                                </Grid>
                                <Grid item>All Engagements </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-end" alignItems="flex-end"
                >
                    <Grid item md={8}>
                        {/* <div style={{marginRight:"20px"}}> */}
                        <EngagamentsMain />
                        {/* </div> */}
                    </Grid>
                </Grid>

            </>
        </MuiThemeProvider>
    );
}

export default Dashboard
