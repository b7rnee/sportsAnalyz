import api from './api';

const getPlayers = () => {
    return api.get('/players');
};

const getShotChart = (fullName) => {
    return api.get(`/shotChartDetail/${fullName}`)
};

export const dashboardService = {
    getPlayers,
    getShotChart,
};
