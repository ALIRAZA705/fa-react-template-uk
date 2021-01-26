import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

export default function EnglandCrest({ fillColor, width, height, className, ...props }) {

    const useStyles = makeStyles(theme => ({
        'cls-1': {
            fill: fillColor || theme.palette.primary.main,
        },
        svg: {
            width: width || 100,
            height: height || 100,
        }
    }));

    const classes = useStyles();

    return (
        <SvgIcon
            className={classNames(classes.svg, className)}
            viewBox="0 0 56.953 67.744"
            {...props}>
            <path
                className={classes['cls-1']}
                id="path3027"
                d="M0,0V36.485A28.125,28.125,0,0,0,6.941,55.622c4.823,5.486,12.072,9.571,21.531,12.122,9.473-2.551,16.719-6.628,21.545-12.122a28.12,28.12,0,0,0,6.936-19.137V0Z"
            />
        </SvgIcon>
    );
}