import defaultMuiCssBaseline from '../../default/MuiOverrides/MuiCssBaseline';

const MuiCssBaseline = {
    ...defaultMuiCssBaseline,
    '@global': {
        ...defaultMuiCssBaseline['@global'],
        body: {
            ...defaultMuiCssBaseline['@global'].body,
            backgroundImage: 'radial-gradient(circle at 50% 0, #354d7a, #10141d 75%);',
            '&:before': {
                ...defaultMuiCssBaseline['@global'].body['&:before'],
                backgroundImage: 'linear-gradient(to left, #00b2ff 64%, #7799ff 41%, #189fff 0%)'
            }
        }
    }
};

export default MuiCssBaseline;