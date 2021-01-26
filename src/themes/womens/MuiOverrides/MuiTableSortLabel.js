import defaultMuiTableSortLabel from '../../default/MuiOverrides/MuiTableSortLabel';

const MuiTableSortLabel = {
    ...defaultMuiTableSortLabel,
    icon: {
        ...defaultMuiTableSortLabel.icon,
        color: '#393939 !important'
    },
};

export default MuiTableSortLabel;