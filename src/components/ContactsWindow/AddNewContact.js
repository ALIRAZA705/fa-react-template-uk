import React, { useEffect } from "react"
import { FormControl, FormLabel } from '@material-ui/core';
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import clsx from 'clsx';
import { makeStyles, fade, useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Modal from '@material-ui/core/Modal';
import Engagements from './Engagements'
import Qualification from "./Qualification";
import RoleInfo from "./RoleInfo";
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { SignalWifi1BarLock } from "@material-ui/icons";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import ScheduleIcon from '@material-ui/icons/Schedule';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useSelector, useDispatch } from 'react-redux'
import {getNewContactWindow,getReadContact,getContactWindow} from '../../store/actions/auth'

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
        width: theme.spacing(7),
        height: theme.spacing(7),
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

export default function AddNewContact() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    // const [state, dispatch] = useContext(Context)
    const dispatch = useDispatch()
    const openNewContact = useSelector(state => state.FaData.openNewContact)
    const [Values, setValues] = React.useState(initialAccountValues);
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
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
            <MuiThemeProvider theme={getMuiTheme()}>
                <div style={{ margin: "10px" }}>


                    <Grid
                        container
                        direction="column"
                        justify="flex-end"
                        alignItems="flex-end"
                    >
                        <Grid item  >

                            <HighlightOffIcon style={{ marginLeft: "20px", color: "white" }} onClick={() =>
                                //  dispatch({ type: 'isNewConatctWindow', value: !openNewContact })
                                 
                                 dispatch(getNewContactWindow(!openNewContact))

                                 } />

                        </Grid>
                    </Grid>


                    <Grid
                        container
                        direction="row"
                        // style={{ flexGrow: 1 }}
                        // spacing={2}
                        justify="center"
                        alignItems="center"
                    >

                       
                                <Grid item  >
                                    <FormLabel style={{ color: "white", margin: "20px" }}>New contact</FormLabel>
                                  

                                </Grid>
                               
                            </Grid>
                            <hr style={{width:"100%"}}/>




                </div>


                <Grid container spacing={1}>
                    <Grid container item md={12} spacing={3} >
                        <Grid item md={4}>
                            <TextField variant="outlined" size="small" label="New Contact" name="newContact" value={Values.newContact} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Status " name="status" value={Values.status} onChange={handleInputChange}
                            />
                            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                                <KeyboardDatePicker
                                    autoOk={true}
                                    showTodayButton={true}
                                    // label="Date"
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
                                        // label="Time picker"
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
                                        // label="Time picker"
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
                            <TextField variant="outlined" size="small" label="Engagement Category" name="engagementCategory" value={Values.engagementCategory} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Activity Type" name="activityType" value={Values.activityType} onChange={handleInputChange} />                       </Grid>
                        <Grid item md={4}>
                            <TextField variant="outlined" size="small" label="Activity Description" name="activityDescription" value={Values.activityDescription} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Club" name="club" value={Values.club} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Site" name="site" value={Values.site} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Contact" name="contact" value={Values.contact} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Fa Staff" name="faStaff" value={Values.faStaff} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Duration" name="duration" value={Values.duration} onChange={handleInputChange} />
                        </Grid>
                        <Grid item md={4}>
                            <TextField variant="outlined" size="small" label="Project" name="project" value={Values.project} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Visit Summary" name="visitSummary" value={Values.visitSummary} onChange={handleInputChange} />
                            <TextField variant="outlined" size="small" label="Additional Attendees" name="additionalAttendees" value={Values.additionalAttendees} onChange={handleInputChange} />                        </Grid>


                    </Grid>

                </Grid>

            </MuiThemeProvider>
        </div>
    )
}