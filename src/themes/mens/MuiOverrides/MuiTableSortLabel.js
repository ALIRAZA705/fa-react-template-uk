import defaultMuiTableSortLabel from '../../default/MuiOverrides/MuiTableSortLabel';

const MuiTableSortLabel = {
    ...defaultMuiTableSortLabel,
    icon: {
        ...defaultMuiTableSortLabel.icon,
        color: '#fff !important'
    },
};

export default MuiTableSortLabel;