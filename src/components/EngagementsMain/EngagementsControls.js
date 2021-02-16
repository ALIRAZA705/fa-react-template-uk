import React, { useEffect } from 'react';
// import './App.css';
import Grid from '@material-ui/core/Grid';
// import CheckBox from './Checkbox';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
// import ExportCsv from './ExportCsv'
import Search from '../../Search';
import Dropdown1 from '../../Dropdown';
// import AddContact from './Components/ContactsWindow'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { OpenInBrowserOutlined } from '@material-ui/icons';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {getContactWindow,getEngagementsFilters} from '../../store/actions/auth'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
const contact = [
    'JUSTIN BOWLY 1',
    'JUSTIN BOWLY 2',
    'JUSTIN BOWLY 3 ',
    'JUSTIN BOWLY 4',
    'JUSTIN BOWLY 5',
    'JUSTIN BOWLY 6',
    'JUSTIN BOWLY 7',
    'JUSTIN BOWLY 8',
    'JUSTIN BOWLY 9',
    'JUSTIN BOWLY 10',
]
const staff = [
    'DAVID HAMPSHIRE 1',
    'DAVID HAMPSHIRE 2',
    'DAVID HAMPSHIRE  3 ',
    'DAVID HAMPSHIRE  4',
    'DAVID HAMPSHIRE 5',
    'DAVID HAMPSHIRE 6',
    'DAVID HAMPSHIRE 7',
    'DAVID HAMPSHIRE 8',
 
]
const engagements = [
    'engagements 1',
    'engagements 2',
    'engagements 3 ',
    'engagements 4',
    'engagements 5',
    'engagements6',
    'engagements  7',

]
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const getMuiTheme = () =>
    createMuiTheme({
        palette: {
            primary: {
               main: "#203043" // This is an orange looking color
                      },
            secondary: {
               main: "#1CB9FF" //Another orange-ish color
                       }
                  },
        overrides: {
            MuiInputLabel: {
                root: {
                    color: "white"
                },
            },
            // datepicker input field
            MuiInputBase: {
                input: {
                    // padding: "10.5px 14px",
                    color: "white"
                },
            },
            //form of new contact
            MuiFormControl: {
                root: {
                    marginTop: "23px ! important",
                    width: '55%',
                },
            },
            // input color 
            MuiOutlinedInput: {
                root: {
                    color: "white",
                },
                input: {
                    color: "white",
                },
            },
            //
       
        }

    });



export default function EngagementsControls(props) {
    // const [names, setnames] = React.useState(contact)
    const [open, setopen] = React.useState(true)
    const classes = useStyles();

    // const [state, dispatch] = useContext(Context)
    const dispatch = useDispatch()
    const _open = useSelector(state => state.FaData.open)

    
    const handleOpen = () => {
        // setopen(true)
        console.log("form contact window open", open)
        dispatch(getContactWindow(open))
        // dispatch({ type: 'isConatctWindow', value: open })

    };
    const [selectedDate, setDate] = React.useState(moment());
    const [selectedEndDate, setEndDate] = React.useState(moment());
    const [inputValue, setInputValue] = React.useState(moment().format("DD/MM/YYYY"));
    const [inputEndValue, setInputEndValue] = React.useState(moment().format("DD/MM/YYYY"));
    const [button, setButton] = React.useState("primary");
    const [button1, setButton1] = React.useState("primary");
    const [button2, setButton2] = React.useState("primary");
    const [flag, setFlag] = React.useState(0);

    const onDateChange = (date, value) => {
        setDate(date);
        setInputValue(value);
    };
    const onDateEndChange = (date, value) => {
        setEndDate(date);
        setInputEndValue(value);
    };
 const clickHandler=(value) =>{
        console.log("value prop", value)
    
        if (value == "planned") {
            console.log("planned")
            setButton("secondary")
            setButton1("primary")
            setButton2("primary")
            setFlag(1);
            // dispatch({ type: 'EngagementsFilterTable', value: 1})
            dispatch(getEngagementsFilters(1))
        }
        else if (value == "completed") {
            setButton("primary")
            setButton1("secondary")
            setButton2("primary")
            // dispatch({ type: 'EngagementsFilterTable', value: 2})
            dispatch(getEngagementsFilters(2))


        }
        else if (value == "cancelled") {
            setButton("primary")
            setButton1("primary")
            setButton2("secondary")
            // dispatch({ type: 'EngagementsFilterTable', value: 3})
            dispatch(getEngagementsFilters(3))


        }



        console.log("clicked button", button)


    }
    const dateFormatter = str => {
        return str;
    };
  
    useEffect(() => {
        console.log("useeffect trigerd")
        // dispatch({ type: 'EngagementsFilterTable', value: 1})
        dispatch(getEngagementsFilters(1))
        setFlag(1)
        
        setButton("secondary")
        setButton1("primary")
        setButton2("primary")
        return () => {

            // setButton("primary")
            // setButton1("primary")
        };
    }, []);
    return (
//    <Container>
<div >
   <MuiThemeProvider theme={getMuiTheme()}>


            <Grid
                container
                direction="row"
                // justify="space-evenly"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={6} md={2} >  <Search label="Search Engagements"/> </Grid>
                <Grid item xs={6} md={1}  > <Dropdown1 label="Staff" data={contact} /> </Grid>
                <Grid item  xs={6} md={1} > <Dropdown1 label="Contact" data={staff} /> </Grid>
                <Grid item  xs={6} md={1} > <Dropdown1 label="Engagement" data={engagements} /> </Grid>
                <Grid item  xs={6} md={2} >
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
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item  xs={6} md={2} >
                    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                        <KeyboardDatePicker
                            autoOk={true}
                            showTodayButton={true}
                            // label="Date"
                            value={selectedEndDate}
                            format="DD/MM/YYYY"
                            inputValue={inputEndValue}
                            onChange={onDateEndChange}
                            rifmFormatter={dateFormatter}
                            keyboardIcon={<InsertInvitationIcon style={{ color: "white" }} />}

                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6} md={2} >
      <ButtonGroup size="small" aria-label="small outlined primary button group" style={{marginTop:"24px"}}>
        <Button  color={button} onClick={(e) => clickHandler('planned')}>Planned</Button>
        <Button  color={button1} onClick={(e) => clickHandler('completed')}>Completed</Button>
        <Button  color={button2}  onClick={(e) => clickHandler('cancelled')}>Cancelled</Button>
      </ButtonGroup>
                </Grid>
            </Grid>

        </MuiThemeProvider>
        </div>
        // </Container>
    )
}
