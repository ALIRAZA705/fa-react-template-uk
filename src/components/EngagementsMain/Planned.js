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
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
// import getMuiTheme from '../../styles/Overridestyles'


const useStyles = makeStyles((theme) => ({
    root: {
        border: "2px solid",
        borderColor: '#041f42',
        backgroundColor: '#041f42',
        width: '100%',
            borderSpacing: "0 6px ! important",
            borderCollapse: "separate ! important",

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
      MuiTable: {
        root:
        {
            borderSpacing: "0 6px ! important",
            borderCollapse: "separate ! important"
        }
    },
    // MuiTableRow: {
    //     root:
    //     {
    //         border: "2px solid",
    //         borderColor: '#041f42',
    //         backgroundColor: '#041f42',
    //         width: '100%',
    
    //         '&:hover': {
    //             borderColor: '#1b9bd7',
    //         }
    //     }
    // },
   
      MuiToolbar: {
        root: {
          backgroundColor: '#f00',
        },
      },
      MuiTableCell: {
        root: {
          // padding:"16px",
            paddingLeft:"35px ! important",
            borderBottom:"1px solid #041f42 ",
            
        //   border:"1px solid #314151 ",
        //   '&:hover': {
        //     border:"1px solid #314151 ",

    
        //   },
        },
        body: {
          color: 'white',
        },
        head: {
          color: 'white',
          backgroundColor: "#00152e"
        }
      },
      MUIDataTableSelectCell: {
        headerCell: {
          backgroundColor: 'blue',
        },
      },

      MuiTableFooter: {
        root: {
          '& .MuiToolbar-root': {
            backgroundColor: 'white',
          },
        },
      },

      MuiTableRow: {
        root: {
          verticalAlign:"baseline",
          border: "2px solid",
          borderColor: '#041f42',
          backgroundColor: '#041f42',
          width: '100%',
  
          '&:hover': {
              borderColor: '#1b9bd7',
          }
        },
      },
    


      
 
    }
  });
//  const getMuiTheme = () =>
//         createMuiTheme({
//             overrides: {
//                 MuiTable: {
//                     root:
//                     {
//                         borderSpacing: "0 3px ! important",
//                         borderCollapse: "separate ! important"
//                     }
//                 },
//                 MUIDataTable: {
//                     root: {
//                         backgroundColor: "red",
//                     },
//                     paper: {
//                         boxShadow: 'none',
//                     },
//                 },
//                 MuiToolbar: {
//                     root: {
//                         backgroundColor: '#f00',
//                     },
//                 },
//                 MuiTableCell: {
//                     root: {
//                       paddingLeft:"35px ! important",
//                       borderBottom:"1px solid #314151 ",
                
//                     },
//                     body: {
//                         color: 'white',
//                     },
//                     head: {
//                         color: 'white',
//                         backgroundColor: "#00152e"
//                     }
//                 },
//                 MUIDataTableSelectCell: {
//                     headerCell: {
//                         backgroundColor: 'blue',
//                     },
//                 },

//                 MuiTableFooter: {
//                     root: {
//                         '& .MuiToolbar-root': {
//                             backgroundColor: 'white',
//                         },
//                     },
//                 },

//                 MuiTableRow: {
//                     root: {
//                         verticalAlign: "baseline",
//                           backgroundColor:"#314154"
//                     },
//                 },
//             }

//         });
function Rowdata(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [backgroundColor, setbackgroundColor] = React.useState("#041f42");
    const [form, setForm] = React.useState(false);
    const classes = useStyles();
    return (
        <React.Fragment >
            <TableRow style={{height:"70px",paddingBottom:"50px"}} 
             onClick={() => {
                    setOpen(!open)
                }}  >

                <TableCell component="th" scope="row" style={{ paddingTop: 20 }} > {row.planned.date} </TableCell>
                <TableCell align="left" >{row.planned.club_name}</TableCell>
                <TableCell align="left">{row.planned.contacts}</TableCell>
                <TableCell align="left">{row.planned._staff}</TableCell>
                <TableCell align="left">{row.planned.status}</TableCell>
                <TableCell align="left">{row.planned.staff}</TableCell>
                <TableCell align="left">{row.planned.visit_summary}</TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function PlannedEngagements() {
    const dispatch = useDispatch()
    const engagements = useSelector(state => state.FaData.engagements)
    // const club = useSelector(state => state.clubs)
    // const [state, dispatch] = useContext(Context)

    const header = ["CONTACT NAME", "ROLE", "CLUB", "LEAGUE"]
    return (
        <div>
            {/* <Header /> */}
            {/* <AddContact/> */}
            <MuiThemeProvider theme={getMuiTheme()}>
                <TableContainer component={Paper} >
                    <Table aria-label="collapsible table" style={{
                        backgroundImage: `url(${backgroundImage})`
                    }} >
                        <TableHead  >
                            <TableRow  >
                                <TableCell>Date</TableCell>
                                <TableCell align="left">Clubs</TableCell>
                                <TableCell align="left">Contacts</TableCell>
                                <TableCell align="left">Staff</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Staff</TableCell>
                                <TableCell align="left">Brief Summary Of Visit</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody   >
                            {engagements.map((row) => (
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
