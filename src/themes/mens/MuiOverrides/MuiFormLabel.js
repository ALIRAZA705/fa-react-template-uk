import defaultMuiFormLabel from '../../default/MuiOverrides/MuiFormLabel';

const MuiFormLabel = {
    ...defaultMuiFormLabel,
    root: {
        ...defaultMuiFormLabel.root,
        "&$focused": {
            color: "#fff",
        }
    }
};

export default MuiFormLabel;