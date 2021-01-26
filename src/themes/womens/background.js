import { fade } from '@material-ui/core/styles/colorManipulator';

import BGImageFade from '../../assets/images/LightTheme/womens_shirt.jpg';
import LineBG from '../../assets/images/LightTheme/divide-lines.svg';

const background = {
    default: 'pink',
    body: fade('#FFF', 0.3),
    paper: '#FFFFFF',
    lines: `url(${LineBG})`,
    overlay: 'radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.4), #ffffff 35%, #c9c9c9 100%, #bebebe 101%)',
    overlayOpacity: 0.77,
    image: `url(${BGImageFade})`
};

export default background;