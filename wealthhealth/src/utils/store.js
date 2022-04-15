import { configureStore } from "@reduxjs/toolkit";
import newEmployeeReducer from "./reducers/newEmployeeReducer";

const store = configureStore({
    reducer: {
        employees: newEmployeeReducer
    }
})

export default store