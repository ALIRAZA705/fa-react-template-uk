import defaultMuiInputLabel from '../../default/MuiOverrides/MuiInputLabel';

const MuiInputLabel = {
    ...defaultMuiInputLabel,
    root: {
        ...defaultMuiInputLabel.root,
        color: 'rgb(255 255 255 / 37%)',
    }
};

export default MuiInputLabel;