
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';
// import Budget from 'src/components/dashboard//Budget';
// import LatestOrders from 'src/components/dashboard//LatestOrders';
// import LatestProducts from 'src/components/dashboard//LatestProducts';
import Graphic from './graphic';
// import TasksProgress from 'src/components/dashboard//TasksProgress';
// import TotalCustomers from 'src/components/dashboard//TotalCustomers';
// import TotalProfit from 'src/components/dashboard//TotalProfit';
// import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

const Predict = () => (
    <>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
            }}
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={8}
                        md={12}
                        xl={9}
                        xs={12}
                    >
                        <Graphic />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

export default Predict;
