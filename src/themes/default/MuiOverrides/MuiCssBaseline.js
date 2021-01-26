import { jackReg, jackMed, jackLight, interLight } from '../../fonts';

const MuiCssBaseline = {
    '@global': {
        '@font-face': [jackReg, jackMed, jackLight, interLight],
        html: {
            minHeight: '100%',
        },
        body: {
            height: '100%',
            position: 'relative',
            '&:before': {
                height: 4,
                position: 'fixed',
                zIndex: '999',
                top: 0,
                left: 0,
                width: '100%',
                objectFit: 'contain',
                content: '""',
            }
        },
        strong: {
            fontFamily: 'FSJack_Medium',
            fontWeight: 'bold'
        }
    },
};

export default MuiCssBaseline;