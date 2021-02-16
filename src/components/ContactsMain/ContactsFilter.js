import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import ExportCsv from '../../ExportCsv'
import Search from '../../Search';
import Dropdown1 from '../../Dropdown';
import AddContact from '../ContactsWindow'
import { Button } from '@material-ui/core';
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
import { useSelector, useDispatch } from 'react-redux'

const name = [
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
const league = [
    'PREMIER LEAGUE 1',
    'PREMIER LEAGUE 2',
    'PREMIER LEAGUE 3 ',
    'PREMIER LEAGUE 4',
    'PREMIER LEAGUE 5',
    'PREMIER LEAGUE 6',
    'PREMIER LEAGUE  7',
    'PREMIER LEAGUE  8',
    'PREMIER LEAGUE  9',
    'PREMIER LEAGUE  10',
]
const role = [
    'HEAD COACH 1',
    'HEAD COACH 2',
    'HEAD COACH 3 ',
    'HEAD COACH 4',
    'HEAD COACH 5',
    'HEAD COACH 6',
    'HEAD COACH  7',
    'HEAD COACH  8',
    'HEAD COACH  9',
    'HEAD COACH  10',
]
const getMuiTheme = () =>
    createMuiTheme({
        overrides: {
            MuiDialogActions: {
                root: {
                    // padding:"0px"
                },
            },
            MuiDialog: {
                paper: {
                    backgroundColor: "#09213e",
                    // maxWidth:"50%",
                    overflowX: "hidden",
                    overflowY: "hidden"
                },
                paperWidthLg: {
                    maxWidth: "1280px"
                },
                paperScrollPaper: {
                    flexDirection: "column"
                },
            },
        }

    });



export default function ContactsFilters(props) {
    const [names, setnames] = React.useState(name)
    const [open, setopen] = React.useState(true)
    // const [state, dispatch] = useContext(Context)
    const dispatch = useDispatch()
    const _open = useSelector(state => state.open)
    const handleOpen = () => {
        // setopen(true)
        console.log("form contact window open", open)
        dispatch({ type: 'isConatctWindow', value: open })
    };

    // console.log("location", window.location)
    // useEffect(() => {
    //     setopen(true)
    //     return () => console.log('unmounting...');

    //   });
    return (
        <MuiThemeProvider theme={getMuiTheme()}>

            {/* <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"

        >
         */}

            <Grid
                container
                direction="row"
                // justify="space-evenly"
                // alignItems="center"
                spacing={4}
            >
                <div style={{ margin: 18 }}>
                <Grid item xs={6} md={2} >  <Search label="Search for Contact"/> </Grid></div>
                <Grid item xs={6} md={2}  > <Dropdown1 label="Club" data={names} /> </Grid>
                <Grid item xs={6} md={2}  > <Dropdown1 label="Select League" data={league} /> </Grid>
                <Grid item xs={6} md={2}  > <Dropdown1 label="Select Role" data={role} /> </Grid>
               <Grid item xs={6} md={2}  >  <Button onClick={handleOpen} style={{color:"black",backgroundColor:"#45506B",marginBottom:"4px",marginTop:"2px",width:"140px"}}>Add Contacts</Button>
                    <Dialog
                        fullWidth={true} 
                        maxWidth='lg'
                        open={_open}
                        // onClose={handleClose}
                        aria-labelledby="max-width-dialog-title"
                    >

                        <AddContact />
                        {/* </GridList> */}
                        <DialogActions>
                        </DialogActions>
                    </Dialog>
                  <br/>
                    <ExportCsv csvData={props.row} fileName="csvfie" /></Grid>
            </Grid>



            {/* <Grid md={2}> */}
                {/* <br /> */}


                {/* <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                > */}
                    
                {/* </Grid> */}
                {/* </Grid> */}
            {/* </Grid> */}
        </MuiThemeProvider>
    )
}
