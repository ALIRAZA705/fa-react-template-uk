import React, { useEffect } from "react"
import { FormControl, FormLabel } from '@material-ui/core';
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import { makeStyles, fade, useTheme } from '@material-ui/core/styles';

import { green } from '@material-ui/core/colors';

import Avatar from '@material-ui/core/Avatar';
import lc_clubimage from '../../assets/lc.png';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import ScheduleIcon from '@material-ui/icons/Schedule';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useSelector, useDispatch } from 'react-redux'
import  {getNewEngagementWindow}  from '../../store/actions/auth';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const initialAccountValues = {
    newContact: '',
    status: '',
    date: '',
    time: '',
    engagementCategory: '',
    activityType: '',
    activityDescription: '',
    club: '',
    site: '',
    contact: '',
    faStaff: '',
    duration: '',
    project: '',
    visitSummary: '',
    additionalAttendees: ''
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
    timer: {
        "& .MuiFormControl-root": {
            width: "40%"
        },
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),

    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
    large: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: "7px"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
    },
  
}));
const getMuiTheme = () =>
    createMuiTheme({
        overrides: {
            // form details 
            // placeholder color
            MuiInputLabel: {
                root: {
                    color: "white"
                },
            },
            // datepicker input field
            MuiInputBase: {
                // root:{height:"inherit"},
                input: {
                    padding: "10.5px 14px",
                    color: "white"
                },
            },
            //form of new contact
            MuiFormControl: {
                root: {
                    margin: 5,
                    width: '88%',
                    marginLeft:40,
                    marginBottom:20,
                    backgroundColor: "#172e4a",
                    border: "2px  solid #364a63",
                },
            },
            // input color 
            MuiOutlinedInput: {
                root: {
                    color: "white",
                    // backgroundColor: "#1d2749"
                },
                input: {
                    color: "white",
                },
            },
            //for tabs
            MuiTab: {
                root: {
                    backgroundColor: "#1d2749",

                },
                // wrapper: {
                //     color: "white"
                // },
                textColorPrimary: {
                    color: "white"
                },
            },
            palette: {
                primary: "white",
                secondary: "black"
            },

            //datepicker toolbar

            MuiPickersToolbar: {
                toolbar: {
                    backgroundColor: "#1d2749"
                }
            },
            MuiPickersDay: {
                daySelected: {
                    backgroundColor: "#1d2749"
                }
            },
            //today , cancel button date picker
            MuiButton: {
                textPrimary: { color: "#1d2749" }
            },
            MuiIconButton: {
                root: {
                    color: "black"
                }
            },
        },
        //icon button color of date picker
        //background of modal
        // MuiPaper: {
        //     root: {
        //         backgroundColor: "red"
        //     }
        // },


    });

export default function AddNewEngagement() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch()
    const openNewEngagement = useSelector(state => state.FaData.openNewEngagement)
    const [Values, setValues] = React.useState(initialAccountValues);
    const [selectedDate, setDate] = React.useState(moment());
    const [selectedDateend, setDateend] = React.useState(moment());

    const [inputValue, setInputValue] = React.useState(moment().format("DD/MM/YYYY"));
    const onDateChange = (date, value) => {
        setDate(date);
        setInputValue(value);
    };

    const dateFormatter = str => {
        return str;
    };
  
    const [open, setopen] = React.useState(false);

    const [button, setButton] = React.useState("primary");
    const [button1, setButton1] = React.useState("primary");
    const [button2, setButton2] = React.useState("primary");
    const [flag, setFlag] = React.useState(0);

 

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleDateChangeend = (date) => {
        setDateend(date);
    };
   
    const handleInputChange = (e) => {
        console.log("values of accounts:", e.target.getAttribute('value'))
        setValues({
            ...Values,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        console.log("useeffect trigerd")
        setFlag(1)

        setButton("secondary")
        return () => {

            // setButton("primary")
            // setButton1("primary")



        };

    }, []);
    return (
        <div>
            
                <div style={{ margin: "10px" }}>


                    <Grid
                        container
                        direction="column"
                        justify="flex-end"
                        alignItems="flex-end"
                    >
                        <Grid item  >

                            <HighlightOffIcon style={{ marginLeft: "20px", color: "white" }} onClick={() => 
                            dispatch(getNewEngagementWindow(!openNewEngagement ))
                            
                            } />

                        </Grid>
                    </Grid>


                    <Grid
                        container
                        direction="row"
                       
                        justify="center"
                        alignItems="center"
                    >
                           <Grid item  >
                                    <FormLabel style={{ color: "white",marginRight:"15px"}}>Engagement</FormLabel>
                                </Grid>
                           
                               <h1 style={{ color: "white",marginRight:"15px"}}>&middot;</h1>
                                <Grid item  >
                                <Avatar alt="Remy Sharp" src={lc_clubimage} className={classes.large} />
                                </Grid>
                               
                                <Grid item  >
                                    <FormLabel style={{ color: "white", margin: "20px",marginLeft:"0px" }}>Leicester City Football Club</FormLabel>
                                </Grid>
                                <h1 style={{ color: "white",marginRight:"15px"}}>&middot;</h1>

                                <Grid item  >
                                    <FormLabel style={{ color: "white",marginRight:"15px"}}>Justion Bowley</FormLabel>
                                </Grid>
                               
                            </Grid>
                            <hr style={{width:"100%"}}/>




                </div>


                <Grid container spacing={1}>
                    <Grid container item md={12} spacing={3} >
                        <Grid item md={4}>
                            <TextField variant="outlined" size="small" label="Status " name="status" value={Values.status} onChange={handleInputChange}
                            />
                            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                                <KeyboardDatePicker
                                    autoOk={true}
                                    showTodayButton={true}
                                    value={selectedDate}
                                    format="DD/MM/YYYY"
                                    inputValue={inputValue}
                                    onChange={onDateChange}
                                    rifmFormatter={dateFormatter}
                                    keyboardIcon={<InsertInvitationIcon style={{ color: "white" }} />}

                                />
                                <Grid container direction="row" alignItems="flex-start" justify="flex-start">
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        style={{ width: "37.5%" }}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        keyboardIcon={<ScheduleIcon style={{ color: "white" }} />}

                                    />
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        style={{ width: "38%" }}
                                        value={selectedDateend}
                                        onChange={handleDateChangeend}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        keyboardIcon={<ScheduleIcon style={{ color: "white" }} />}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                             <TextField variant="outlined" size="small" label="Duration" name="duration" value={Values.duration} onChange={handleInputChange} />

                            <TextField variant="outlined" size="small" label="Engagement Category" name="engagementCategory" value={Values.engagementCategory} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Activity Type" name="activityType" value={Values.activityType} onChange={handleInputChange} />                       </Grid>
                        <Grid item md={4}>
                            <TextField variant="outlined" size="small" label="Activity Description" name="activityDescription" value={Values.activityDescription} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Club" name="club" value={Values.club} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Site" name="site" value={Values.site} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="ChoseContact" name="contact" value={Values.contact} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Fa Staff" name="faStaff" value={Values.faStaff} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Additional Attendees" name="additionalAttendees" value={Values.additionalAttendees} onChange={handleInputChange} />                   
                        </Grid>
                        <Grid item md={4}>
                            <TextField variant="outlined" multiline  rowsMax={10} size="small" label="Brief Summary of Visit" name="visitSummary" value={Values.visitSummary} onChange={handleInputChange} style={{height:"50%"}}/>

                                 </Grid>


                    </Grid>

                </Grid>

        </div>
    )
}