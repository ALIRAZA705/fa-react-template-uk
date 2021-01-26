import defaultMuiDialog from '../../default/MuiOverrides/MuiDialog';

import PlayerBackgroundImage from '../../../assets/images/DarkTheme/helix-mens-bkgnd-no-stripe-240x300.jpg';

const MuiDialog = {
    ...defaultMuiDialog,
    scrollPaper: {
        ...defaultMuiDialog.scrollPaper,
        backgroundImage: `url(${PlayerBackgroundImage})`,
    }
}

export default MuiDialog;