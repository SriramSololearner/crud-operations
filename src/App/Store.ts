import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "../Features/Crud/crudSlice";

export const Store = configureStore({
    reducer:{
        user:crudSlice
    }
});


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
