import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  payload: user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.setItem("authJWT", user.token);
    return dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("authJWT");
  return dispatch(userLoggedOut());
};

export default {
  login,
  userLoggedIn
};
