import defaultMuiInputLabel from '../../default/MuiOverrides/MuiInputLabel';

const MuiInputLabel = {
    ...defaultMuiInputLabel,
    root: {
        ...defaultMuiInputLabel.root,
        color: 'rgb(57 57 57 / 37%)'
    }
};

export default MuiInputLabel;