import { createStore } from 'redux';
import reducer from 'src/store/reducer';

const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const store = createStore(reducer);

export default store;
