import defaultMuiCssBaseline from '../../default/MuiOverrides/MuiCssBaseline';

const MuiCssBaseline = {
    ...defaultMuiCssBaseline,
    '@global': {
        ...defaultMuiCssBaseline['@global'],
        body: {
            ...defaultMuiCssBaseline['@global'].body,
            backgroundImage: 'radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.4), #ffffff 35%, #c9c9c9 100%, #bebebe 101%)',
            '&:before': {
                ...defaultMuiCssBaseline['@global'].body['&:before'],
                backgroundImage: 'linear-gradient(to left, #d90000 50%, #ff0000 66%)'
            }
        }
    }
};

export default MuiCssBaseline;