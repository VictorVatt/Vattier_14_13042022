export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

export const initialStete = {
    firstName: '',
    lastName: '',
    birthdate : new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: "",
    zipCode: '',
    department: "",
}


function addEmployeeToTheList (employee, state) {
    const updateList = [...state.employeeList]
    updateList.push({...employee})
    return {...state, employeeList: updateList}
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