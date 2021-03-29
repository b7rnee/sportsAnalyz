import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Analyz(props) {
    const classes = useStyles();
    const [info, setInfo] = React.useState([]);
    React.useEffect(() => {
        setInfo(props.info)
    }, [props]);
    return (
        <React.Fragment>
            <Title>2019-2020 оны статистик</Title>
            <Typography component="p" variant="h6">
                PTS: {props?.info[0]}
            </Typography>
            <Typography style={{ marginTop: 30 }} component="p" variant="h6">
                FGA: {props?.info[1]}
            </Typography>
            <Typography style={{ marginTop: 30 }} component="p" variant="h6">
                FGM: {props?.info[2]}
            </Typography>
            <Typography style={{ marginTop: 30 }} component="p" variant="h6">
                FG_PCT: {props?.info[3]}%
            </Typography>
            <Typography style={{ marginTop: 30 }} component="p" variant="h6">
                FG3A: {props?.info[4]}
            </Typography>
            <Typography style={{ marginTop: 30 }} component="p" variant="h6">
                FG3M: {props?.info[5]}
            </Typography>
            <Typography style={{ marginTop: 30 }} component="p" variant="h6">
                FG3_PCT: {props?.info[6]}
            </Typography>


            <div>
            </div>
        </React.Fragment>
    );
}