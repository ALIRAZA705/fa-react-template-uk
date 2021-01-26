import defaultMuiTooltip from '../../default/MuiOverrides/MuiTooltip';

const MuiTooltip = {
    ...defaultMuiTooltip,
    tooltip: {
        ...defaultMuiTooltip.tooltip,
        backgroundColor: '#004F9F',
        color: '#FFFFFF'
    }
};

export default MuiTooltip;