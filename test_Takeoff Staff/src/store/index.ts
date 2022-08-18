import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/index";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persisetReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persisetReducer, applyMiddleware(thunk))
const porsistor = persistStore(store)
export default store
export {porsistor}