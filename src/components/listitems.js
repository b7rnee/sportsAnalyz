import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimelineIcon from '@material-ui/icons/Timeline';


export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <EqualizerIcon htmlColor="#25d56f" />
            </ListItemIcon>
            <ListItemText primary="Analyz" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <TimelineIcon htmlColor="#25d56f" />
            </ListItemIcon>
            <ListItemText primary="Predict" />
        </ListItem>
    </div>
);
