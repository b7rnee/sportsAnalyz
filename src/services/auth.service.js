import api from './api';

const login = (params) => {
    return api.get(`/login/${params.username}/${params.password}`);
};

const register = (body) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return api.post(`/register/${body.userName}`, body, { headers: headers })
};

export const authService = {
    login,
    register,
};
