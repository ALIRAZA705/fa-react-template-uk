import defaultMuiPopover from '../../default/MuiOverrides/MuiPopover';

const MuiPopover = {
    ...defaultMuiPopover,
    paper: {
        ...defaultMuiPopover.paper,
        backgroundColor: 'rgb(45, 66, 92) !important',
    }
};

export default MuiPopover;