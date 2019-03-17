const API_URL = 'https://conduit.productionready.io/api';

const handleErrors = (response: any) => {
    if (!response.ok) {
        let error = {
            statusText: response.statusText,
            status: response.status,
            response: response
        };
        throw error;
    }
    return response;
};

export const fetchApi = (endPoint: any, payload: any = {}, method = 'get', headers = {}) => {
    let request = new Request(`${API_URL}${endPoint}`, {
        method: method,
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            ...({ 'Content-Type': 'application/json;charset=UTF-8' }),
            ...({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            ...headers
        },
        ...(method === 'post' ? { body: payload } : {}),
    });
    return fetch(request).then(handleErrors);
};

export const actionTypes = (type: string) => ({
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
});
