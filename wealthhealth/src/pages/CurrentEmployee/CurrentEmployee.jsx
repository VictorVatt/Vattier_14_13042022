import EmployeeList from "../../components/DataTable.jsx"
import { Link } from 'react-router-dom'
import "../../styles/CurrentEmployee.css"

function CurrentEmployee() {

    return (
        <div className="page-container">
            <Link className="header-link2" to={"/"}>Add a new employee</Link>
            <h1 className="page-title">Current Employee</h1>
            <EmployeeList />
        </div>
    )
}

export default CurrentEmployee