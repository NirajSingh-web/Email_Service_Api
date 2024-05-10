import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FetchUserEmailServiceslice from "../Slice/FetchEmailserviceSlice";
import fetchuserdata from "../Slice/fetchuser";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, fetchuserdata);
const store = configureStore({
  reducer: {
    EmailServiceData: FetchUserEmailServiceslice,
    userdata: persistedReducer,
  },
});
const persistor = persistStore(store);
export { store, persistor };
