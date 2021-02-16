import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
    //   MuiTable: {
    //     root:
    //     {
    //         borderSpacing: "0 3px ! important",
    //         borderCollapse: "separate ! important"
    //     }
    // },
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
        root:{
          paddingLeft:"35px",
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
          verticalAlign:"baseline"
        },
      },
      MuiAccordionSummary:{
        content:{
          margin:"0px 0px",
          "&$expanded": {
            margin:"0px 0px" },
      
        },
      
        root:{
          padding:"0px 0px",
        
        }
      },
    
      MuiAccordionDetails:{
        root:{
          backgroundColor:"#041f42",
          color:"white",
        }
      },

// for multi select check box
// MuiInputLabel:{
// formControl:{
//   color:"white"
// }
// },
// MuiTnput:{
//   underline:{
// before:{
//   borderBottom:"1px solid white"
// },
//   },
// },
// MuiSelect:{
//   icon{
// color:"white"
//   },
// },



      // Header icon button 
      MuiSvgIcon:{
        root:{
          paddingTop:"6px"
        }
      },
      // form details 
      // placeholder color
      MuiInputLabel:{
        root:{
          color:"white"
        },
      },
      MuiFormControl:{
        root:{
          margin:5,
          width: '100%',
        },
      },
      // input color 
      MuiOutlinedInput:{
        root:{
          color:"white",
          backgroundColor:"#1d2749"
        },
        input:{
          color:"white",
        },
      },
     
      input: {
        "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px black inset",
        backgroundColor:"black"
        }
        }
    }
  });
  export default getMuiTheme