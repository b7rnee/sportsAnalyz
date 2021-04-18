import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import PeopleIcon from '@material-ui/icons/SportsBasketball';

const TotalStatistic = (props) => (
    <Card {...props}>
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        style={{ fontSize: 14, fontWeight: 'bold', width: 280 }}
                    >
                        {String(props.text).toUpperCase()}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{ fontSize: 22, fontWeight: 'bold' }}
                        color="textPrimary"
                    >
                        {props.value}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: green[600],
                            height: 56,
                            width: 56
                        }}
                    >
                        <PeopleIcon />
                    </Avatar>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
);

export default TotalStatistic;
