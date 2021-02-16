import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Grot12Condensed from '../assets/fonts/GROT/Grot12Condensed-MediumWEB.ttf';
import EnglandFCDISPLAY from '../assets/fonts/ENGLAND_FC_DISPLAY/EnglandFCDISPLAY-Regular.woff';
import { fade } from '@material-ui/core/styles/colorManipulator';

const grot12 = {
    fontFamily: 'Grot12Condensed',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Grot12Condensed'),
    url(${Grot12Condensed}) format('truetype')
  `,
    // unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const englandFCDisplay = {
    fontFamily: 'EnglandFCDISPLAY',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('EnglandFCDISPLAY'),
    url(${EnglandFCDISPLAY}) format('truetype')
  `,
    // unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
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
      MuiCssBaseline: {
        '@global': {
            '@font-face': [grot12, englandFCDisplay],
            body: {
                backgroundColor: fade('#D7DDE3', 0.3),
            },
        },
    },
    MuiButton: {
        borderRadius: 2
    },
    MuiTooltip: {
        tooltip: {
            backgroundColor: '#004F9F',
            fontSize: 16,
            color: '#FFFFFF'
        }
    },
     
      input: {
        "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px black inset",
        backgroundColor:"black"
        }
        }
    },
    
  });
  export default getMuiTheme