import { configureStore } from "@reduxjs/toolkit";
import createAccountSlice from "./features/createAccountSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      createAccountSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
