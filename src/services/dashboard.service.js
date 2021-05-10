import api from './api';

const getPlayers = () => {
    return api.get('/players');
};

const getShotChart = (fullName) => {
    return api.get(`/shotChartDetail/${fullName}`)
};

const getHotZone = (fullName) => {
    return api.get(`/hotZoneChart/${fullName}`)
};

const predictData = () => {
    return api.get('/predict');
}

export const dashboardService = {
    getPlayers,
    getShotChart,
    predictData,
    getHotZone
};
