import { Doughnut } from 'react-chartjs-2';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    colors,
    useTheme
} from '@material-ui/core';


const TrafficByDevice = (props) => {
    const theme = useTheme();
    const getPercent = () => {
        return props.info[2] * 100 / props.info[1]
    }
    const data = {
        datasets: [
            {
                data: [getPercent(), 100 - getPercent()],
                backgroundColor: [
                    '#25d56f',
                    '#3f51b5',
                ],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white
            }
        ],
        labels: ['Амжилттай шидэлтийн тоо', 'Амжилтгүй шидэлтийн тоо']
    };

    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };

    const devices = [
        {
            title: 'Амжилттай шидэлтийн хувь',
            value: getPercent(),
            color: '#25d56f',
        },
        {
            title: 'Амжилтгүй шидэлтийн хувь',
            value: 100 - getPercent(),
            color: '#3f51b5'
        },
    ];

    return (
        <Card {...props}>
            <CardHeader title='Довтолгооны статистик' />
            <Divider />
            <CardContent>
                <div className="progress-container">
                    <Box
                        sx={{
                            height: 300,
                            position: 'relative'
                        }}
                    >
                        <Doughnut
                            data={data}
                            options={options}
                        />
                    </Box>      </div>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 2
                    }}
                >
                    {devices.map(({
                        color,
                        icon: Icon,
                        title,
                        value
                    }) => (
                        <Box
                            key={title}
                            sx={{
                                p: 1,
                                textAlign: 'center'
                            }}
                            style={{ flexWrap: 1 }}
                        >
                            <Typography
                                color="textSecondary"
                                style={{ fontWeight: 'bold' }}
                                variant="body1"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="h2"
                                style={{ fontSize: 22, fontWeight: 'bold', color: color }}
                            >
                                {value.toFixed(1)}%
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TrafficByDevice;
