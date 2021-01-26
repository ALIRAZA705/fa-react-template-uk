import defaultMuiTooltip from '../../default/MuiOverrides/MuiTooltip';

const MuiTooltip = {
    ...defaultMuiTooltip,
    tooltip: {
        ...defaultMuiTooltip.tooltip,
        color: '#FFFFFF'
    }
};

export default MuiTooltip;