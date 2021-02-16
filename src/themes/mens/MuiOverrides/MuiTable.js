import defaultMuiTable from '../../default/MuiOverrides/MuiTable';

const MuiTable = {
    ...defaultMuiTable,
    root:
    {
        borderSpacing: "0 3px ! important",
        borderCollapse: "separate ! important"
    }
};

export default MuiTable;