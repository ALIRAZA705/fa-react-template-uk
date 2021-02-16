import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EditAccountDetails from './EditAccount'
import Drawer from '@material-ui/core/Drawer';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { useSelector, useDispatch } from 'react-redux'
import { getHeaderDrawer } from './store/actions/auth';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },

  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    width: "20%",
    backgroundColor: "#011E41"
  },
}));
const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MuiAccordionSummary: {
        content: {
          margin: "0px 0px",
          "&$expanded": {
            margin: "0px 0px",
          }
        },
        MuiPaper: {
          root: {

              backgroundColor: "#03162e",
              color: "white"

          },
      },

        root: {
          padding: "0px 0px",
          backgroundColor: "#03162e",
        }
      },
      MuiAccordionDetails: {
        root: {
          backgroundColor: "#03162e",
          color:"white"
        }
      },
      //dialog 
      MuiDialogActions: {
        root: {
            padding: "0px",
        },
    },
    }

  });
const navLinks = [
  { title: `DASHBOARD`, path: `/helix/dashboard` },
  { title: `CONTACTS`, path: `/helix/contacts` },
  { title: `CLUBS`, path: `/helix/clubs` },
  { title: `ENGAGEMENT`, path: `/helix/engagements` },
  { title: `STAFF`, path: `/helix/staff` },
]
export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [border, setborder] = React.useState("#041f42");
  // const [state, dispatch] = useContext(Context)
  const dispatch = useDispatch()
  const openHeaderDrawer = useSelector(state => state.FaData.openHeaderDrawer)
  const handleOpen = () => {
    // setOpen(!open);
    dispatch(getHeaderDrawer(!openHeaderDrawer))
    // console.log("openheader",openHeaderDrawer)

    // dispatch({type:"isHeaderDrawer", value:true})

  // const FilterFlip = () => {
  //   setOpen(!open);
  };

  const handleForm = () => {
    console.log("icon button clicked")
  }
  return (
    <div >
     

        {/* <Accordion
        TransitionProps={{ unmountOnExit: true }} 
        style={{
          borderBottom: `2px solid ${border}`
        }} onMouseEnter={() => {
          setborder('  #1b9bd7');
        }}
          onMouseLeave={() => {
            setborder("#041f42");
          }} >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"

          > */}
            <AppBar position="static">
              <Toolbar style={{ backgroundColor: "#041f42" }} >
                <Container className={classes.navbarDisplayFlex} >
                  <h2   >Club Engagements</h2>
                  <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
                    {navLinks.map(({ title, path }) => (
                      <a href={path} key={title} className={classes.linkText}>
                        <ListItem button>
                          <ListItemText primary={title} />
                        </ListItem>
                      </a>
                    ))}
                    {/* <NavLink to  */}
                  </List>
                  <div>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={handleOpen}
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>
                  {/* {isform? */}
                
                
                  <Dialog
                    fullWidth={true}
                    maxWidth='lg'
                    open={openHeaderDrawer}
                    aria-labelledby="max-width-dialog-title"
                >
                      <Drawer
                      className={classes.drawer}
                      variant="permanent"
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      anchor="right"
                    >
                      <div className={classes.toolbar} />
                      <EditAccountDetails />
                    </Drawer>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
            
             
                </Container>
              </Toolbar>
            </AppBar>
          {/* </AccordionSummary> */}
          {/* <AccordionDetails> */}
         {/* {window.location=="http://localhost:3000/contacts"?  <EngagemenstControls row={state.clubs} />:<ContactControls row={state.clubs} />} */}
          {/* </AccordionDetails> */}
        {/* </Accordion> */}
     
    </div>
  )
}
