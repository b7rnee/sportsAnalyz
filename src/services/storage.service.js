
function getAccessToken() {
    const state = localStorage.getItem('auth');
    return state?.access_token;
}

function isAuthenticated() {
    // const state = JSON.parse(localStorage.getItem('auth') || '');

    // return state?.isAuthenticated;
    return false
}

function setAuth(auth) {
    localStorage.setItem('auth', JSON.stringify(auth));
}

function setQrCode(qrCode) {
    localStorage.setItem('qrCode', qrCode);
}

function clear() {
    localStorage.removeItem('auth');
}

export const storageService = {
    getAccessToken,
    isAuthenticated,
    setAuth,
    setQrCode,
    clear,
};
