import React, { useEffect } from "react"
import { FormControl, FormLabel } from '@material-ui/core';
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import lc_clubimage from '../../assets/lc.png';
import Qualification from "./Qualification";
import RoleInfo from "./RoleInfo";
import { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import AddNewContact from './AddNewContact'
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useSelector, useDispatch } from 'react-redux'
import {getNewContactWindow,getReadContact,getContactWindow} from '../../store/actions/auth'
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
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
}));

const getMuiTheme = () =>
    createMuiTheme({

        palette: {
            primary: {
               main: "#1CB9FF" // This is an orange looking color
                      },
            secondary: {
               main: "#203043" //Another orange-ish color
                       }
                  },
        overrides: {
            // form details 
            // placeholder color
            MuiInputLabel: {
                root: {
                    color: "white"
                },
            },
            MuiFormControl: {
                root: {
                    margin: 5,
                    width: '80%',
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
                textColorPrimary: {
                    color: "white"
                },
            },


            MuiDialog:{
                paper:{
                    backgroundColor:"#09213e",
                    // maxWidth:"50%",
                    overflowX:"hidden",
                    overflowY:"hidden"
                },
                paperWidthLg:{
                    maxWidth:"1280px"
                },
                paperScrollPaper:{
                    flexDirection:"column"
                },
            },
            // MuiDialogActions: {
            //     root: {
            //         display: "flex",
            //         padding: "18px",
            //         margin: "2px",
                 
            //     },
            // },
        },




    });

export default function AddContact() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    // const [state, dispatch] = useContext(Context)
    const dispatch = useDispatch()
    const readContactonly = useSelector(state => state.FaData.readContactonly)
    const _open = useSelector(state => state.FaData.open)
    const openNewContact = useSelector(state => state.FaData.openNewContact)


    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };
    const fabs = {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
        label: 'Add',
    }
    const [open, setopen] = React.useState(false);

    const [button, setButton] = React.useState("primary");
    const [button1, setButton1] = React.useState("primary");
    const [button2, setButton2] = React.useState("primary");
    const [flag, setFlag] = React.useState(0);
    const addContactscreen = () =>  {
        // dispatch({ type: 'isNewConatctWindow', value: true })
        dispatch(getNewContactWindow(true))
    }

    const handleChange = (event) => {
        // dispatch({ type: 'isreadContactOnly', value: !readContactonly })

dispatch(getReadContact(!readContactonly))
    };
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
    const clickHandler = (e, value) =>  {
        console.log("value prop", value)

        if (value == "role") {
            setButton("primary")
            setButton1("secondary")
            setButton2("secondary")
            setFlag(1);

        }
        else if (value == "engagements") {
            setButton("secondary")
            setButton1("primary")
            setButton2("secondary")
            setFlag(2);

        }
        else if (value == "qualifications") {
            setButton("secondary")
            setButton1("secondary")
            setButton2("primary")
            setFlag(3);

        }
        console.log("clicked button", button)
    }
    useEffect(() => {
        console.log("useeffect trigerd")
        setFlag(1)

        setButton("primary")
        setButton1("secondary")
        setButton2("secondary")
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
                            <HighlightOffIcon style={{ marginLeft: "20px", color: "white" }} onClick={() => {
                                // dispatch({ type: 'isConatctWindow', value: getContactWindow})
                                dispatch(getContactWindow(!_open))
                                // dispatch({ type: 'isreadContactOnly', value: false })getReadContact
                                dispatch(getReadContact(false))

                            }} />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={lc_clubimage} className={classes.large} />
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            style={{ flexGrow: 1 }}
                            // spacing={2}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item  >
                                <Grid item  >
                                    <FormLabel style={{ color: "white" }}>LEICESTER CITY FOOTBALL CLUB</FormLabel>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center" alignItems="center"
                        >
                                <Grid item >
                                    <ButtonGroup variant="contained" aria-label="contained primary button group" style={{ margin: "10px" }}>
                                        <Button color={button} onClick={(e) => clickHandler(e, 'role')}>Role Information</Button>
                                        <Button color={button1} onClick={(e) => clickHandler(e, 'engagements')} >Engagements</Button>
                                        <Button color={button2} onClick={(e) => clickHandler(e, 'qualifications')}>Qualifications</Button>
                                    </ButtonGroup>
                                </Grid>
                            <Grid
                                container
                                justify="flex-end"
                            >
                                <Grid item >
                                    <Typography component="div" style={{ marginRight: "20px", color: "white" }}>
                                        <Grid component="label" container alignItems="flex-end" spacing={1}>
                                            <Grid item>Locked</Grid>
                                            <Grid item>
                                                <AntSwitch checked={readContactonly} onChange={handleChange} />
                                            </Grid>
                                            <Grid item>Edit Mode</Grid>
                                        </Grid>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                {
                    flag === 1 ? <RoleInfo />
                        : flag === 2 ? <Engagements />
                            : <Qualification />
                }

                <Fab size="small" aria-label={fabs.label} className={fabs.className} color={fabs.color} onClick={addContactscreen}>
                    {fabs.icon}
                </Fab>
                <Dialog
                    fullWidth={true}
                    maxWidth='lg'
                    open={openNewContact}
                    aria-labelledby="max-width-dialog-title"
                >
                    <AddNewContact />
                    <DialogActions>
                    </DialogActions>
                </Dialog>
            </MuiThemeProvider>
        </div>
    )
}