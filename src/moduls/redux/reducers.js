import { CHANENG_THEME } from "./actionType";

const defaultState = {
    themeType: "light"
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANENG_THEME:
      return {
        ...state,
        themeType:action.payload
      };
    default:
      return state;
  }
};

export default reducer;
