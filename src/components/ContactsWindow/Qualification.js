import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import backgroundImage from '../../assets/main.png'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'


import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid ",
        // borderBottomColor: 'white',
        backgroundColor: '#041f42',
        width: '100%',

        '&:hover': {
            //   borderColor: '#1b9bd7',
            backgroundColor: "gray"
        }
    },
    // collapse icon arrow color
    iconcolor: {
        color: "white"
    },
    // spacing between table rows and font color
    Rowspaicng: {
        paddingBottom: 6,
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
const getMuiTheme = () =>
    createMuiTheme({
        overrides: {
            MuiTableCell: {
                body: {
                    color: 'white',
                },
                head: {
                    color: 'white',
                    backgroundColor: "#041f42"
                }
            },
            MuiTableContainer:{
                root:{
                    overflowX:"hidden"
                }
            },
    
        
            
        }

    });

function Rowdata(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [backgroundColor, setbackgroundColor] = React.useState("#041f42");
    const [form, setForm] = React.useState(false);
    const classes = useStyles();
    return (
        <React.Fragment >
            <TableRow className={classes.root} >
                <TableCell component="th" scope="row" style={{ paddingTop: 20 }}  >
                    {row.basicInfo.club_name}
                </TableCell>
                <TableCell align="right" >{row.basicInfo.main_ground}</TableCell>
                <TableCell align="right">{row.basicInfo.address}</TableCell>
             
            </TableRow>
        </React.Fragment>
    );
}

export default function Qualification() {
    const dispatch = useDispatch()
    const clubs = useSelector(state => state.clubs)
    // const [state, dispatch] = useContext(Context)

    const header = ["CONTACT NAME", "ROLE", "CLUB", "LEAGUE"]
    return (
        <div>
            <MuiThemeProvider theme={getMuiTheme()}>
                <TableContainer component={Paper} >
                    <Table aria-label="collapsible table"
                    //  style={{
                    //     backgroundImage: `url(${backgroundImage})`
                    // }} 
                    
                    >
                        <TableHead  >
                            <TableRow  >
                                <TableCell>Qualification Name</TableCell>
                                <TableCell align="right">Achieved</TableCell>
                                <TableCell align="right">Expires</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody   >
                            {clubs.map((row) => (
                                <Rowdata key={row.club_name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </MuiThemeProvider>
            {/* <TableDetails club={club} header={header}/> */}
        </div>
    );
}






































// function Engagements(){
//     return(<div>ali aa</div>)
// }
// export default Engagements