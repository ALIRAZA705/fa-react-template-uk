import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
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
import EngagementHistory from './EngagementHistory'
import backgroundImage from '../../assets/main.png'
import { makeStyles } from '@material-ui/core/styles';
import getMuiTheme from '../../styles/Overridestyles'
import { useSelector, useDispatch } from 'react-redux'
import Collapse from '@material-ui/core/Collapse';
import { useContext } from 'react';
// import ClubInfo from './Clubinfo';

const useStyles = makeStyles((theme) => ({
    root: {
        // border: "2px solid",
        borderColor: '#041f42',
        backgroundColor: '#041f42',
        width: '100%',

        '&:hover': {
            borderColor: '#1b9bd7',
        }
    },
    // collapse icon arrow color
    iconcolor: {
        color: "white"
    },
    // spacing between table rows and font color
    Rowspaicng: {
        paddingBottom: 1,
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: 0,
        color: 'white'
    },

    // collapse table
    SubTable: {
        backgroundColor: '#00152e',
        borderRight: "1px solid white"
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
}));


function Rowdata(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [backgroundColor, setbackgroundColor] = React.useState("#041f42");
    const [form, setForm] = React.useState(false);
    const classes = useStyles();
    return (
        <React.Fragment >
            <TableRow className={classes.root}

                onClick={() => {
                    setOpen(!open)
                }}  >

                <TableCell component="th" scope="row" style={{ paddingTop: 20 }}  >
                    {row.basicInfo.staff_name}
                </TableCell>
                <TableCell align="left" >{row.basicInfo.role}</TableCell>
                <TableCell align="left">{row.basicInfo.email}</TableCell>
                <TableCell align="left">{row.basicInfo.home}</TableCell>
                <TableCell align="left">{row.basicInfo.work}</TableCell>
                <TableCell align="left">{row.basicInfo.mobile}</TableCell>

                <TableCell >
                    <IconButton aria-label="expand row" className={classes.iconcolor} size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow  >
                {/* sub tables */}
                <TableCell className={classes.Rowspaicng} colSpan={12}   >
                    <Collapse in={open} timeout="auto" unmountOnExit style={{ backgroundColor: "#00152e"}}>
                        <EngagementHistory row={row} />
                    </Collapse>
                </TableCell>
            
            </TableRow>
        </React.Fragment>
    );
}

export default function Clubs() {
    const dispatch = useDispatch()
    const staff = useSelector(state => state.FaData.staff)
    // const club = useSelector(state => state.clubs)
    // const [state, dispatch] = useContext(Context)

    const header = ["CONTACT NAME", "ROLE", "CLUB", "LEAGUE"]
    return (
        <div>
            {/* <Header /> */}
            {/* <AddContact/> */}
            
                <TableContainer component={Paper} >
                    <Table aria-label="collapsible table" 
                    style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}
                    
                    >
                        <TableHead  >
                            <TableRow  >
                                <TableCell>Staff Name</TableCell>
                                <TableCell align="left">Role</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Home</TableCell>
                                <TableCell align="left">Work</TableCell>
                                <TableCell align="left">Mobile</TableCell>
                                <TableCell align="right" />
                            </TableRow>
                        </TableHead>
                        <TableBody   >
                            {staff.map((row) => (
                                <Rowdata key={row.staff_name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
          
            {/* <TableDetails club={club} header={header}/> */}
        </div>
    );
}
