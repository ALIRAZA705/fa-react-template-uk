import defaultMuiFormLabel from '../../default/MuiOverrides/MuiFormLabel';

const MuiFormLabel = {
    ...defaultMuiFormLabel,
    root: {
        ...defaultMuiFormLabel.root,
        "&$focused": {
            color: "#393939",
        }
    }
};

export default MuiFormLabel;