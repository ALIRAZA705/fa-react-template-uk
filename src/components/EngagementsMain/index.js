import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import backgroundImage from '../../assets/main.png'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import PlannedEngagements from './Planned'
import EngagementComplete from './EngagementComplete'
import EnagagementsCancelled from './EngagementsCancelled'
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import AddNewEngagement from './AddNewEngagement';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
 import { getNewEngagementWindow } from '../../store/actions/auth';

const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
  },
  fab: {
      position: 'fixed',
      bottom: theme.spacing(5),
      right: theme.spacing(5),

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
export default function Engagements() {
    const dispatch = useDispatch()
    const EngagementsFilterFlag = useSelector(state => state.FaData.EngagementsFilterFlag)
    const classes = useStyles();
    const openNewEngagement = useSelector(state => state.FaData.openNewEngagement)

    const fabs = {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
  }
  const openNewEngagementwindow = () =>  {
    // dispatch({ type: 'isNewEngagementWindow', value: true })
    dispatch(getNewEngagementWindow(true))

}

    return (
        // <div>
        <MuiThemeProvider theme={getMuiTheme()}>

          {EngagementsFilterFlag==1?<PlannedEngagements/>:EngagementsFilterFlag==2?<EngagementComplete/>:EngagementsFilterFlag==3?<EnagagementsCancelled/>:<></>}
   
          <Fab size="large" aria-label={fabs.label} className={fabs.className} color={fabs.color} onClick={openNewEngagementwindow} >
                    {fabs.icon}
                </Fab>
                <Dialog
                    fullWidth={true}
                    maxWidth='lg'
                    open={openNewEngagement}
                    aria-labelledby="max-width-dialog-title"
                >
                    <AddNewEngagement />
                    <DialogActions>
                    </DialogActions>
                </Dialog>
                </MuiThemeProvider>
        // </div>
    );
}
