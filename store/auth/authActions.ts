import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { AuthActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';

export const loginRequest = (): AuthActionTypes => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (token: string): AuthActionTypes => ({
    type: LOGIN_SUCCESS,
    payload: token,
});

export const loginFailure = (error: string): AuthActionTypes => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const login = (
    email: string,
    password: string
): ThunkAction<void, RootState, unknown, AuthActionTypes> => async (dispatch) => {
    dispatch(loginRequest());

    try {
    // Aqui vai a chamada para a API de login
    const token = 'meu_token_de_login';

    localStorage.setItem('token', token);

    dispatch(loginSuccess(token));
} catch (error) {
    dispatch(loginFailure('Erro ao realizar login'));
}
};
