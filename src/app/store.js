import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReducer,
  },
  middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(apiSlice.middleware),
});
