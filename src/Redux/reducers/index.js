import { combineReducers } from 'redux';
import { LOGIN, CLIENT } from '../actions/actionLogin';

const INITIAL_STATE = {
  login: {},
  clients: []
}

const clientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return ({
        ...state,
        login: {
          email: action.email,
          password: action.password,
        },
      })
    case CLIENT:
      return ({
        ...state,
        clients: [...state.clients, action.client],
      })
    default: return state;
  }
}

export const rootReducer = combineReducers({ clientsReducer });
