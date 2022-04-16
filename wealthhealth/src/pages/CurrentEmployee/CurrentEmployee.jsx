import EmployeeList from "../../components/DataTable"
import { Link } from 'react-router-dom'
import "../../styles/CurrentEmployee.css"

function CurrentEmployee() {

    return (
        <div>
            <Link className="header-link" to={"/"}>New employee</Link>
            <h1>Current Employee</h1>
            <EmployeeList />
        </div>
    )
}

export default CurrentEmployee