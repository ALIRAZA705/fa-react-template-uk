import React from 'react'
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
// import { MuiThemeProvider} from '@material-ui/core/styles';
// import getMuiTheme from './styles/Overridestyles'
// import useStyles from './styles/Makestyles'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';



const getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MuiTable: {
                    root:
                    {
                        borderSpacing: "0 3px ! important",
                        borderCollapse: "separate ! important"
                    }
                },
                MUIDataTable: {
                    root: {
                        backgroundColor: "red",
                    },
                    paper: {
                        boxShadow: 'none',
                    },
                },
                MuiToolbar: {
                    root: {
                        backgroundColor: '#f00',
                    },
                },
                MuiTableCell: {
                    root: {
                        paddingLeft: "35px",
                        borderBottom:"1px solid #314151 ",
                        // paddingTop: 4,
                        // paddingBottom: 4,
                        // "&:last-child": {
                        //   paddingRight: 5
                        // }
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
                        verticalAlign: "baseline",
                          backgroundColor:"#314154"
                    },
                },
            }

        });

function Qualifications(props) {
    const { row } = props;
    // const { open } = props;
    // const classes = useStyles(); 

    return (
        <MuiThemeProvider theme={getMuiTheme()}>
            <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                    Qualification
            </Typography>
                <Table size="small" aria-label="purchases"  >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Contact Number</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.contacts.map((historyRow) => (
                            <TableRow key={historyRow.name}>
                                <TableCell component="th" scope="row">
                                    {historyRow.name}
                                </TableCell>
                                <TableCell>{historyRow.role}</TableCell>
                                <TableCell align="left">{historyRow.email}</TableCell>
                                <TableCell align="left">{historyRow.contact_number}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
    </MuiThemeProvider>)
}
export default Qualifications
