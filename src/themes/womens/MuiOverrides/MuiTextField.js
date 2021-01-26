import defaultMuiTextField from '../../default/MuiOverrides/MuiTextField';

const MuiTextField = {
    ...defaultMuiTextField,
    root: {
        ...defaultMuiTextField.root,
        background: 'white',
    }
};

export default MuiTextField;