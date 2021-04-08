function isAuthenticated() {
    const state = localStorage.getItem('authData');
    const auth = JSON.parse(state);
    return auth?.isAuthenticated;
}

function setAuth(auth) {
    localStorage.setItem('authData', JSON.stringify(auth));
}

function clear() {
    localStorage.removeItem('auth');
}

export const storageService = {
    isAuthenticated,
    setAuth,
    clear,
};
