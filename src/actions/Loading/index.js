import { LOADING_START, LOADING_FINISHED } from '../../constants';

export const startLoading = () => dispatch => {
  dispatch({ type: LOADING_START });
};

export const stopLoading = () => dispatch => {
  dispatch({ type: LOADING_FINISHED });
};
