import defaultMuiPopover from '../../default/MuiOverrides/MuiPopover';

const MuiPopover = {
    ...defaultMuiPopover,
    paper: {
        ...defaultMuiPopover.paper,
        backgroundColor: '#fff !important'
    }
};

export default MuiPopover;