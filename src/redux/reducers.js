import defaultState from './default-state';

// eslint-disable-next-line
const rootReducer = (state = defaultState, action) => {
  if (action.type === 'GENERIC_UPDATE') {
    return { ...state, ...action.payload };
  }
  return state;
};
export default rootReducer;
