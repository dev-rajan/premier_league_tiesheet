import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "./Services/Reducers/RootReducer";
import clubSaga from "./Services/Sagas/ClubSaga";

const sagaMiddleWare = createSagaMiddleware();

const Store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleWare],
});

sagaMiddleWare.run(clubSaga);

export default Store;
