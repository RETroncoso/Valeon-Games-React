import { createStore } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const initialState = {};

export const store = createStore(rootReducer, initialState);

export const persistor = persistStore(store);
