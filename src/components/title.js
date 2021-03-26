import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
    return (
        <Typography component="h2" variant="h6" style={{ color: '#25d56f' }} gutterBottom>
            {props.children}
        </Typography>
    );
}
