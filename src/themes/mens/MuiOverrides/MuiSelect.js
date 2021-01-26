import defaultMuiSelect from '../../default/MuiOverrides/MuiSelect';

const MuiSelect = {
    ...defaultMuiSelect,
    select: {
        ...defaultMuiSelect.select,
        '&:focus': {
            backgroundColor: 'transparent'
        }
    }
};

export default MuiSelect;