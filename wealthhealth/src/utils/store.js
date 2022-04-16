import { configureStore } from "@reduxjs/toolkit";

import newEmployeeReducer from "./reducers/newEmployeeReducer";

const store = configureStore({
    reducer: {
        employees: newEmployeeReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store