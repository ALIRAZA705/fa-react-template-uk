import React from 'react'
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
// import useStyles from './styles/Makestyles'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { BorderBottom } from '@material-ui/icons';

function EngagementHistory(props) {
    const { row } = props;
    // const { open } = props;
    // const classes = useStyles();
    // const   renderTableHeading = (header1) => {
    //     return (
    //         header1.map((header, index) => {
    //             console.log("header of u", header);
    //             return (<TableCell align="left">
    //                 {header}
    //             </TableCell>)
    //         })
    //     )
    // }
    // const  renderTableBody = (head) => {
    //     return (

    //         head.map((people, index) => {

    //            console.log("heading of otable", Object.keys(people));
    //         //    return (<TableCell > {head[people]} </TableCell>)
    //         }

    //         )
    //     )
    // }
    const getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                // typography: {
                //     fontFamily: [
                //         'Grot12Condensed',
                //     ],
                //     button: {
                //         fontWeight: 400,
                //         textAlign: 'capitalize'
                //     },
                //     fontSize: 16,
                //     h1: {
                //         fontFamily: 'EnglandFCDISPLAY'
                //     },
                //     h2: {
                //         fontFamily: 'EnglandFCDISPLAY'
                //     },
                //     h3: {
                //         fontFamily: 'EnglandFCDISPLAY'
                //     },
                //     h4: {
                //         fontFamily: 'EnglandFCDISPLAY'
                //     }
                // },
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
                        paddingLeft: "35px ! important",
                        borderBottom: "1px solid #314151 ",
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
                        backgroundColor: "#314154"
                    },
                },
            }

        });
    return (
            <Box margin={1}  >
                <Typography variant="h6" gutterBottom component="div" style={{ paddingLeft: "35px" }}>
                    ENGAGEMENT HISTORY
            </Typography>
                <Table size="small" aria-label="purchases"   >
                    <TableHead   >
                        <TableRow  >


                            <TableCell >Date</TableCell>
                            <TableCell>Contact</TableCell>
                            <TableCell align="left">Staff</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >
                        {row.engagementHistory.map((historyRow) => (
                            <TableRow key={historyRow.date}  >


                                <TableCell component="th" scope="row" >
                                    {historyRow.date}
                                </TableCell>
                                <TableCell>{historyRow.contact}</TableCell>
                                <TableCell align="left">{historyRow.staff}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>

    )
}
export default EngagementHistory
