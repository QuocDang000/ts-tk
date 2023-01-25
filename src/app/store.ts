import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga';
import { connectRouter } from 'connected-react-router';
import { history } from 'utils';


export const createRootReducer=() => {
  combineReducers({
    router: connectRouter(history),

  })
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: createRootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
