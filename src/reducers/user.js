import { USER_LOGGED_IN } from "../types";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return { ...state, ...payload };

    default:
      return state;
  }
};
