import defaultMuiTableCell from '../../default/MuiOverrides/MuiTableCell';

const MuiTableCell = {
    ...defaultMuiTableCell,
    root: {
        paddingLeft: "35px",
        borderBottom: "1px solid #314151 ",
    },
    body: {
        color: 'white',
    },
    head: {
        color: 'white',
        backgroundColor: "#00152e"
    }
};

export default MuiTableCell;