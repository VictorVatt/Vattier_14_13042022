export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

function addEmployeeToTheList (employee, state) {
    const updateList = [...state.employeeList]
}



function employeeReducer(state, action) {
    switch (action.type) { // wtach the action type called by dispatch
        case ADD_EMPLOYEE: // if type is ADD_EMPLOYEE then
            return addEmployeeToTheList(action.employee, state) // add an employee to the list with empoyee informations
        default:
            return state
    }

}

export default employeeReducer