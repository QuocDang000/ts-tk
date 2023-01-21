import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([counterSaga()]);
}
