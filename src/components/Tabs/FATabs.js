// import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

export const FATabs = withStyles(theme =>({
    root: {
        borderBottom: 'none',
        '&:after': {
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            content: '""',
            height: 2,
            background: theme.tab.tabBorder,
            zIndex: -1
        }
    },
    indicator: {
        backgroundColor: '#e02020',
        height: 2,
    },
    
}))(Tabs);