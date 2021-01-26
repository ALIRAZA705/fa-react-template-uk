import defaultMuiOutlinedInput from '../../default/MuiOverrides/MuiOutlinedInput';

const MuiOutlinedInput = {
    ...defaultMuiOutlinedInput,
    root: {
        ...defaultMuiOutlinedInput.root,
        // backgroundColor: 'rgb(0 0 1 / .16)',
        backgroundImage: 'linear-gradient(rgb(0 0 1 / .16), rgb(0 0 1 / .16)), linear-gradient(#1f304b,#1f304b)',
        color: 'white'
    }
};

export default MuiOutlinedInput;