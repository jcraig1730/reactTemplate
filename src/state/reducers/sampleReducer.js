import { ACTION_TITLE } from "../actions";

const initialState = {
  FILL_ME_IN: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TITLE:
      return {
        ...state,
        FILL_ME_IN: action.payload
      };
    default:
      return { ...state };
  }
};
