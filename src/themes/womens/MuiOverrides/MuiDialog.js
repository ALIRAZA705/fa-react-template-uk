import defaultMuiDialog from '../../default/MuiOverrides/MuiDialog';

import PlayerBackgroundImage from '../../../assets/images/LightTheme/womens-dialog-background.jpg';

const MuiDialog = {
    ...defaultMuiDialog,
    scrollPaper: {
        ...defaultMuiDialog.scrollPaper,
        backgroundImage: `url(${PlayerBackgroundImage})`,
    }
}

export default MuiDialog;