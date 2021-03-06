import { createStore } from 'redux';
import rootReducer from 'src/reducers/';

export default function configureStore() {
  return createStore(rootReducer);
}