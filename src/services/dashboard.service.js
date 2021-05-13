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

const predictData = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return api.post('/predict',formData);
}

export const dashboardService = {
    getPlayers,
    getShotChart,
    predictData,
    getHotZone
};
