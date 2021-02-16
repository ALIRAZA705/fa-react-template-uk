import defaultMuiDialog from '../../default/MuiOverrides/MuiDialog';

import PlayerBackgroundImage from '../../../assets/images/DarkTheme/helix-mens-bkgnd-no-stripe-240x300.jpg';

const MuiDialog = {
    ...defaultMuiDialog,
    scrollPaper: {
        ...defaultMuiDialog.scrollPaper,
    },
    paper:{
        backgroundColor:"#09213e",
        // maxWidth:"50%",
        overflowX:"hidden",
        overflowY:"hidden"
    },
    paperWidthLg:{
        maxWidth:"1280px"
    },
    paperScrollPaper:{
        flexDirection:"column"
    },
}

export default MuiDialog;