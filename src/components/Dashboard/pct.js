import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const PctProgress = (props) => (
    <Card
        sx={{ height: '100%' }}
        {...props}
    >
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>
                    <Typography
                        style={{ fontSize: 14, fontWeight: 'bold', width: 280 }}
                        color="textSecondary"
                        gutterBottom
                    >
                        {String(props.text).toUpperCase()}
                    </Typography>
                    <Typography
                        variant="h5"
                        color="textPrimary"
                        style={{ fontSize: 22, fontWeight: 'bold' }}
                    >
                        {props.percent.toFixed(1)}%
            </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: orange[600],
                            height: 56,
                            width: 56
                        }}
                    >
                        <InsertChartIcon />
                    </Avatar>
                </Grid>
            </Grid>
            <Box sx={{ pt: 3 }}>
                <LinearProgress
                    value={props.percent}
                    variant="determinate"
                />
            </Box>
        </CardContent>
    </Card>
);

export default PctProgress;
