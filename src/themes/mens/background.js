import { fade } from '@material-ui/core/styles/colorManipulator';

import BGImageFade from '../../assets/images/DarkTheme/mens_shirt.jpg';
import LineBG from '../../assets/images/DarkTheme/divide-lines.svg';

const background = {
    default: 'pink',
    body: fade('#D7DDE3', 0.3),
    paper: '#000001',
    imageLines: `url(${LineBG})`,
    overlay: 'radial-gradient(circle at 50% 0, #354d7a, #10141d 75%)',
    imageFade: `url(${BGImageFade})`,
    shirtOpacity: '0.8',
    lineOpacity: '0.4',
};

export default background;
