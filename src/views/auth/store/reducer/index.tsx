// src/views/auth/store/reducer/index.ts
export interface AuthState {
  loginSuccess: boolean;
  isLoading: boolean;
  errorText: string | null;
}

const initialState: AuthState = {
  loginSuccess: false,
  isLoading: true,
  errorText: null,
};

interface Action {
  type: string;
  isLoading?: boolean;
  loginSuccess?: boolean;
  errorText?: string | null;
}

const AuthReducer = (state: AuthState = initialState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN_LOADING":
      return {
        ...state,
        isLoading: action.isLoading as boolean,
        errorText: action.errorText as string | null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: action.isLoading as boolean,
        loginSuccess: true, // ✅ set true
        errorText: action.errorText as string | null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        errorText: action.errorText as string | null,
        loginSuccess: false, // ✅ set true
        isLoading: action.isLoading as boolean,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default AuthReducer;
