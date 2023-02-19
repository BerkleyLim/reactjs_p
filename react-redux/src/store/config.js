import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// 관리할 슬라이스
import counterSlice from './slices/counterSlice';
import todoSlice from './slices/todoSlice';
import userSlice from './slices/userSlice';

const logger = createLogger();

// reducer 결합
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
  user: userSlice.reducer
});

// 초기 state
const initialState = {};

// store 등록
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

export type RootState = ReturnType<typeof store.getState>;
export let AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;