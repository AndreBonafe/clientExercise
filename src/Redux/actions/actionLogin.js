export const LOGIN = 'LOGIN';
export const CLIENT = 'CLIENT'

export const actionLogin = ({ email, password }) => ({ type: LOGIN, email, password });

export const actionNewClients = (client) => ({ type: CLIENT, client});