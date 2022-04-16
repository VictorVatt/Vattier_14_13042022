import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    employeeList: [],
}

export const newEmployee = createAction("newEmployee")

export default createReducer(initialState, (builder) => 
    builder
    .addCase(newEmployee, (draft, employee) => {
        draft.employeeList.push(employee.payload)
    })
)