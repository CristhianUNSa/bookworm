import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return { ...state, ...payload };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
};
