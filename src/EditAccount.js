import React, { useEffect } from "react"
import { FormControl, FormLabel } from '@material-ui/core';
import { Grid, TextField } from '@material-ui/core';
// import useStyles from './styles/Makestyles'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useSelector, useDispatch } from 'react-redux'
import { getHeaderDrawer,getEngagementsFilters } from './store/actions/auth';

const initialAccountValues = {
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    homePhone: '',
    lineManager: '',
    workPhone: '',
    mobile: ''
}

const getMuiTheme = () =>
    createMuiTheme({
        overrides: {
            // form details 
            // placeholder color
            MuiPaper: {
                root: {

                    backgroundColor: "#03162e",
                    color: "white"

                },
            },
            MuiInputLabel: {
                root: {
                    color: "white"
                },
            },
            // datepicker input field
            MuiInputBase: {
                input: {
                    padding: "10.5px 14px",
                    color: "white"
                },
            },
            //form of new contact
            MuiFormControl: {
                root: {
                    margin: 5,
                    width: '100%',
                    //  backgroundColor: "#172e4a",
                    // border: "2px  solid #364a63",
                },
            },
            // input color 
            MuiOutlinedInput: {
                root: {
                    color: "white",
                    backgroundColor: "#172e4a"
                },
                input: {
                    color: "white",
                },
            },
        }
    });
export default function EmployeeForm() {
   
    const [Values, setValues] = React.useState(initialAccountValues);
    // const [state, dispatch] = useContext(Context)
    const dispatch = useDispatch()
    const openNewContact = useSelector(state => state.FaData.openNewContact)
    const handleInputChange = (e) => {
        console.log("values of accounts:", e.target.value)
        setValues({
            ...Values,
            [e.target.name]: e.target.value
        });
    }
    return (
        <MuiThemeProvider theme={getMuiTheme()}>

            <FormControl >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="baseline"
                >
                    <FormLabel style={{ color: "white" }}>Personal Details</FormLabel>
                    <HighlightOffIcon style={{ marginLeft: "20px", color: "white" }} onClick={() => {
                    dispatch(getHeaderDrawer(false))
                        dispatch(getEngagementsFilters(1))
                        // dispatch({ type: "isHeaderDrawer", value: false })
                        // dispatch({ type: 'EngagementsFilterTable', value: 1})
                    }}

                    />
                </Grid>
                <Grid container item md={12} >
                    <TextField variant="outlined" label="Full Name" name="fullName" value={Values.fullName} onChange={handleInputChange} />
                    <TextField variant="outlined" label="First Name" name="firstName" value={Values.firstName} onChange={handleInputChange} />
                    <TextField variant="outlined" label="Last Name" name="lastName" value={Values.lastName} onChange={handleInputChange} />
                    <TextField variant="outlined" label="Email" name="email" value={Values.email} onChange={handleInputChange} />
                    <TextField variant="outlined" label="Line Manager" name="lineManager" value={Values.lineManager} onChange={handleInputChange} />
                    <TextField variant="outlined" label="Role" name="role" value={Values.role} onChange={handleInputChange} />
                    <TextField variant="outlined" label="Home Phone" name="homePhone" value={Values.homePhone} onChange={handleInputChange} />
                    <TextField variant="outlined" label="Work Phone" name="workPhone" value={Values.workPhone} onChange={handleInputChange} />
                    <TextField variant="outlined" label="Mobile" name=" mobile" value={Values.mobile} onChange={handleInputChange} />
                </Grid>
            </FormControl>
        </MuiThemeProvider>

    )
}