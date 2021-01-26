import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as SVGLogo } from '../assets/icons/pps-logo.svg';

export default function PPSLogo() {
    return (
        <SvgIcon>
            <SVGLogo />
        </SvgIcon>
    );
}

PPSLogo.propTypes = {

}