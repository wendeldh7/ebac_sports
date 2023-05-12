import { AuthState, AuthActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './authTypes';

const initialState: AuthState = {
    token: localStorage.getItem('token') || '',
    loading: false,
    error: '',
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
        ...state,
        loading: true,
        error: '',
    };
    case LOGIN_SUCCESS:
        return {
        ...state,
        token: action.payload,
        loading: false,
        error: '',
    };
    case LOGIN_FAILURE:
        return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
        return state;
}
};

export default authReducer;
