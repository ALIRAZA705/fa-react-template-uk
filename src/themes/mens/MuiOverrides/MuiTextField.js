import defaultMuiTextField from '../../default/MuiOverrides/MuiTextField';

const MuiTextField = {
    ...defaultMuiTextField,
    root: {
        ...defaultMuiTextField.root,
        color: 'white'
    }
};

export default MuiTextField;