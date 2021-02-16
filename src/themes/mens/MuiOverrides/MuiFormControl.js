import defaultMuiFormControl from '../../default/MuiOverrides/MuiFormControl';

const MuiFormControl = {
    ...defaultMuiFormControl,
    root: {
        margin: 5,
        width: '88%',
        marginLeft:40,
        marginBottom:20,
        backgroundColor: "#172e4a",
        border: "2px  solid #364a63",
    },
};

export default MuiFormControl;