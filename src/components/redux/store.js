import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../redux/slices/formSlice'
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    form: formReducer
  },
  preloadedState
})

store.subscribe(() => {
  saveState(store.getState());
});

export default store