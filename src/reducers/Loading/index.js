import { LOADING_START, LOADING_FINISHED } from '../../constants';
const initialState = {
  loadingProcesses: 0,
  loading: false,
};

export default (state = initialState, { type }) => {
  let { loadingProcesses, loading } = state;
  switch (type) {
    case LOADING_START:
      loadingProcesses += 1;
      loading = true;
      return { loadingProcesses, loading };
    case LOADING_FINISHED:
      loadingProcesses -= 1;
      if (loadingProcesses === 0 || loadingProcesses <= 0) {
        loading = false;
        loadingProcesses = 0;
      }
      return { loadingProcesses, loading };
    default:
      return state;
  }
};
