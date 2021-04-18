import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
    {
        id: 1,
        ref: 'CDD1049',
        amount: 30.5,
        customer: {
            name: 'Ekaterina Tankova'
        },
        createdAt: 1555016400000,
        status: 'pending'
    },
    {
        id: 2,
        ref: 'CDD1048',
        amount: 25.1,
        customer: {
            name: 'Cao Yu'
        },
        createdAt: 1555016400000,
        status: 'delivered'
    },
    {
        id: 3,
        ref: 'CDD1047',
        amount: 10.99,
        customer: {
            name: 'Alexa Richardson'
        },
        createdAt: 1554930000000,
        status: 'refunded'
    },
    {
        id: 4,
        ref: 'CDD1046',
        amount: 96.43,
        customer: {
            name: 'Anje Keizer'
        },
        createdAt: 1554757200000,
        status: 'pending'
    },
    {
        id: 5,
        ref: 'CDD1045',
        amount: 32.54,
        customer: {
            name: 'Clarke Gillebert'
        },
        createdAt: 1554670800000,
        status: 'delivered'
    },
    {
        id: 6,
        ref: 'CDD1044',
        amount: 16.76,
        customer: {
            name: 'Adam Denisov'
        },
        createdAt: 1554670800000,
        status: 'delivered'
    }
];

const LatestOrders = (props) => (
    <Card {...props}>
        <CardHeader style={{ color: "#25d56f" }} title="Тоглогчдын жагсаалт" />
        <Divider />
        <PerfectScrollbar>
            <Box sx={{ minWidth: 800 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Id
              </TableCell>
                            <TableCell>
                                First name
              </TableCell>
                            <TableCell>
                                Last name
              </TableCell>
                            <TableCell>
                                Full name
              </TableCell>
                            <TableCell sortDirection="desc">
                                <Tooltip
                                    enterDelay={300}
                                    title="Sort"
                                >
                                    <TableSortLabel
                                        active
                                        direction="desc"
                                    >
                                        Date
                  </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell>
                                Status
              </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.players?.map((el) => (
                            <TableRow
                                onClick={() => {
                                    props.getPlayerChart(el.full_name)
                                }}
                                style={{ cursor: 'pointer' }}
                                hover
                                key={el.id}
                            >
                                <TableCell>
                                    {el.id}
                                </TableCell>
                                <TableCell>
                                    {el.first_name}
                                </TableCell>
                                <TableCell>
                                    {el.last_name}
                                </TableCell>
                                <TableCell>
                                    {el.full_name}
                                </TableCell>
                                <TableCell>
                                    2019-20
                                    </TableCell>
                                <TableCell>
                                    <Chip
                                        color="primary"
                                        label="active"
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </Box>
        </PerfectScrollbar>
    </Card>
);

export default LatestOrders;
