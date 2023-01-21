import { PayloadAction } from '@reduxjs/toolkit';
import { all, delay, put, takeEvery } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting for 2 minutes');
  yield delay(2000)

  console.log('done delay');

  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}


