import { TOGGLE_LIGHT } from './actions';

const initialState = {
  message: 'Hello',
  light: true
};

/**
 * An action arrives. It must be *transformed* in a state mutation, that is,
 * the reducer *must* return an edited copy of the current state.
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return {
        ...state,
        light: !state.light
      };

    default:
      return state;
  }
};

export default reducer;
