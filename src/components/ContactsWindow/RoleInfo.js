import React, { useEffect } from "react"
import { Grid, TextField } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const initialAccountValues = {
    title: '',
    firstName: '',
    lastName: '',
    preferredEmail: '',
    preferredPhone: '',
    role: '',
    faNumber: '',
    associatedClub: '',
    licensed: '',
    licenseExpDate: '',
    higestQualification: '',
    gender: '',
    isPartTime: '',
    lastUpdate: '',
}
const getMuiTheme = () =>
    createMuiTheme({
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
                    marginLeft:40,
                    marginBottom:20,
                    width: '80%',
                    backgroundColor: "#172e4a",
                    border: "2px  solid #364a63",
// paddingLeft:"30px"
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
                // wrapper: {
                //     color: "white"
                // },
                textColorPrimary: {
                    color: "white"
                },
            },
            palette: {
                primary: "white",
                secondary: "black"
            },

        }


    });
export default function RoleInfo() {
    const [Values, setValues] = React.useState(initialAccountValues);
    const [readOnly,setreadOnly]= React.useState(true);
    // const [state, dispatch] = useContext(Context)
    const dispatch = useDispatch()
    const readContactonly = useSelector(state => state.readContactonly)
    const handleInputChange = (e) => {
        console.log("values of accounts:", e.target.getAttribute('value'))
        setValues({
            ...Values,
            [e.target.name]: e.target.value
        });
    }

    return (<div>
        <MuiThemeProvider theme={getMuiTheme()}>

            <Grid container spacing={1}>
                <Grid container item md={12} spacing={3} >
                    <Grid item md={4}>
                        <TextField variant="outlined" size="small" label="Title" name="title" value={Values.title} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }} />
                        <TextField variant="outlined" size="small" label="First Name" name="firstName" value={Values.firstName} onChange={handleInputChange} inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined"  size="small" label="Last Name" name="lastName" value={Values.lastName} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined"  size="small" label="Role" name="role" value={Values.role} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined"  size="small" label="Fa Number" name="faNumber" value={Values.faNumber} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined"  size="small" label="Associated Club" name="associatedClub" value={Values.associatedClub} onChange={handleInputChange} inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }} />                       </Grid>
                    <Grid item md={4}>
                        <TextField variant="outlined" size="small" label="Licensed" name="licensed" value={Values.licensed} onChange={handleInputChange} inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }} />
                        <TextField variant="outlined" size="small" label="License Expiry Date" name="licenseExpDate" value={Values.licenseExpDate} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined" size="small" label="Higest Qualification" name="higestQualification" value={Values.higestQualification} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined" size="small" label="Gender" name="gender" value={Values.gender} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined" size="small" label="Is Part Time" name="isPartTime" value={Values.isPartTime} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                        <TextField variant="outlined" size="small" label="Last Update" name="lastUpdate" value={Values.lastUpdate} onChange={handleInputChange}  inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }}/>
                    </Grid>
                    <Grid item md={4}>
                        <TextField variant="outlined" size="small" label="Preferred Email" name="preferredEmail" value={Values.preferredEmail} onChange={handleInputChange} inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }} />
                        <TextField variant="outlined" size="small" label="Preferred Phone" name="preferredPhone" value={Values.preferredPhone} onChange={handleInputChange} inputProps={{ readOnly: Boolean(!readContactonly), disabled: Boolean(!readContactonly) }} />                        </Grid>


                </Grid>

            </Grid>

        </MuiThemeProvider>
    </div>



    )



}