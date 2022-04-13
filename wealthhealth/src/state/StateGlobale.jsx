import { useReducer } from "react"
import employeeReducer, {ADD_EMPLOYEE} from "./employeReducer"
import { EmployeeContext } from "./CreateContext"


function GlobalState() {
    const employee = []
    const [listState, dispatch] = useReducer(employeeReducer, {employeeList: []} )

    function addEmployeeToTheList(employee) {
        return dispatch({type: ADD_EMPLOYEE, employee: employee})
    }

    return (
        <EmployeeContext.Provider value={{
            employee : employee,
            list: listState,
            addEmployeeToTheList: addEmployeeToTheList,
        }}>



        </EmployeeContext.Provider>
    )
}

export default GlobalState