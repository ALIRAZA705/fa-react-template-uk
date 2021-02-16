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
import Qualifications from './Qualifications'
import EngagementHistory from './EngagementHistory'
// import backgroundImage from '../../Assets/main.png'
import { makeStyles } from '@material-ui/core/styles';
// import getMuiTheme from '../../styles/Overridestyles'
import { useSelector, useDispatch } from 'react-redux'
import Collapse from '@material-ui/core/Collapse';
import ClubInfo from './Clubinfo';
import MensTheme from '../../themes/mens';
import WomensTheme from '../../themes/womens'
let theme = MensTheme;

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 38,
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: 13,
        textAlign: "center",
        color: theme.typography.headingColor
      },
      container: {
        opacity: 0,
        animationName: '$fade',
        animationDuration: '1s',
        animationDelay: '1.5s',
        animationIterationCount: 1,
        animationFillMode: 'forwards'
      },
      backgroundShirt: {
        height: '100%',
        width: '100%',
        zIndex: '-1',
        position: 'absolute',
        backgroundImage: theme.background.imageFade,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        opacity: theme.background.shirtOpacity,
      },
      '@keyframes fade': {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      '@keyframes scale': {
        from: { opacity: 0 },
        to: { opacity: theme.background.lineOpacity, transform: 'scaleX(1)' }
      },
      backgroundLines: {
        height: '100%',
        width: '100%',
        zIndex: '0',
        position: 'absolute',
        backgroundImage: theme.background.imageLines,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        opacity: 0,
        transform: 'scaleX(2.5)',
        animationName: '$scale',
        animationDuration: '1.5s',
        animationIterationCount: 1,
        animationFillMode: 'forwards'
      },
      addedHeight: {
        minHeight: '85vh'
      },
      transparent: {
        background: 'none',
      },
      tabNavWrap: {
        boxShadow: 'none',
        position: 'relative'
      },
      tabNavBorder: {
        //background: theme.tab.tabBorder,
      },
      tabBtn: {
        letterSpacing: 1.6,
        minWidth: 0,
        padding: '6px 16px',
        marginRight: 35,
        color: theme.tab.tabColor
      },
      partnerList: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        '& ul': {
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          '& li': {
            display: 'inline-block',
            maxWidth: 86,
            marginLeft: 45,
            '& img': {
              width: '100%'
            },
            "@media (max-width: 900px)": {
              display: 'inline-block',
              maxWidth: 63,
              marginLeft: 27,
            }
          }
        },
        "@media (max-width: 900px)": {
          bottom: 48,
          right: 0,
          left: 0
        }
   
   
    },
    root: {
        border: "2px solid",
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


function Rowdata(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [backgroundColor, setbackgroundColor] = React.useState("#041f42");
    const [form, setForm] = React.useState(false);
    const classes = useStyles();
    return (
        <React.Fragment >
            <TableRow className={classes.root} style={{height:"70px"}}

                onClick={() => {
                    setOpen(!open)
                }}  >

                <TableCell component="th" scope="row" style={{ paddingTop: 20 }}  >
                    {row.basicInfo.club_name}
                </TableCell>
                <TableCell align="left" >{row.basicInfo.main_ground}</TableCell>
                <TableCell align="left">{row.basicInfo.training_ground}</TableCell>
                <TableCell align="left">{row.basicInfo.league}</TableCell>
                <TableCell >
                    <IconButton aria-label="expand row" className={classes.iconcolor} size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow  style={{backgroundColor:"#00152e"}}  >

                {/* sub tables */}


                <TableCell className={classes.Rowspaicng} colSpan={0} >
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <ClubInfo row={row} />
                    </Collapse>
                    
                </TableCell>
                <TableCell className={classes.Rowspaicng} colSpan={1}   >
                    <Collapse in={open} timeout="auto" unmountOnExit style={{ backgroundColor: "#00152e"}}>
                        <EngagementHistory row={row} />
                        {/* <div style={{height:"100px",borderRight:"2px solid white"}}></div> */}
                    </Collapse>
                </TableCell>
                <TableCell className={classes.Rowspaicng} colSpan={6}   >
                    <Collapse in={open} timeout="auto" unmountOnExit  >
                        <Qualifications row={row} />
                        {/* <div style={{height:"100px"}}></div> */}

                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function Clubs() {
    const dispatch = useDispatch()
    const clubs = useSelector(state => state.FaData.clubs)
    // const club = useSelector(state => state.clubs)
    // const [state, dispatch] = useContext(Context)
    const classes = useStyles();

    const header = ["CONTACT NAME", "ROLE", "CLUB", "LEAGUE"]
    return (
        <div>
            {/* <Header /> */}
            {/* <AddContact/> */}
            {/* <MuiThemeProvider theme={getMuiTheme()}> */}
                <TableContainer component={Paper} >
                    <Table aria-label="collapsible table" 
                    // style={{
                    //     backgroundImage: `url(${className={classes.backgroundShirt.backgroundImage}})`
                    // }} 
                    className={classes.backgroundShirt.backgroundImage}
                    
                    >
                        <TableHead  >
                            <TableRow  >
                                <TableCell>Club Name</TableCell>
                                <TableCell align="left">Main Ground</TableCell>
                                <TableCell align="left">Training Ground</TableCell>
                                <TableCell align="left">League</TableCell>
                                <TableCell align="right" />
                            </TableRow>
                        </TableHead>
                        <TableBody   >
                            {clubs.map((row) => (
                                <Rowdata key={row.club_name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            {/* </MuiThemeProvider> */}
            {/* <TableDetails club={club} header={header}/> */}
        </div>
    );
}
