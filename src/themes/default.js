import { createMuiTheme } from '@material-ui/core';

import { fade } from '@material-ui/core/styles/colorManipulator';

import Grot12Condensed from '../assets/fonts/GROT/Grot12Condensed-MediumWEB.ttf';
import EnglandFCDISPLAY from '../assets/fonts/ENGLAND_FC_DISPLAY/EnglandFCDISPLAY-Regular.woff';

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

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#004F9F',
        },
        secondary: {
            main: '#e1021a',
        },
        text: {
            primary: '#04264C',
            secondary: '#76879B',
            secondaryLight: '#D7DDE3'
        },
        // error: {
        //     contrastText: "#fff",
        //     dark: "#d32f2f",
        //     light: "#e57373",
        //     main: "#f44336"
        // }
    },
    background: {
        default: 'pink',
        body: fade('#D7DDE3', 0.3),
        paper: '#FFFFFF'
    },
    status: {
        green: 'green',
        orange: 'orange',
        red: 'crimson',
        grey: 'grey',
        other: 'darkslategrey'
    },
    overrides: {
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
        }
    },
    typography: {
        fontFamily: [
            'Grot12Condensed',
        ],
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        },
        fontSize: 16,
        h1: {
            fontFamily: 'EnglandFCDISPLAY'
        },
        h2: {
            fontFamily: 'EnglandFCDISPLAY'
        },
        h3: {
            fontFamily: 'EnglandFCDISPLAY'
        },
        h4: {
            fontFamily: 'EnglandFCDISPLAY'
        },
    },
});

export default theme;