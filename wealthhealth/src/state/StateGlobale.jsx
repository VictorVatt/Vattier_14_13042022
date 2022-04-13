import { useReducer } from "react"
import employeeReducer from "./employeReducer"
import { EmployeeContext } from "./CreateContext"


function GlobalState() {
    const employee = []
    const [listState, dispatch] = useReducer(employeeReducer, {employeeList: []} )





    return (
        <EmployeeContext.Provider value={
            employee : employee
        }>



        </EmployeeContext.Provider>
    )
}