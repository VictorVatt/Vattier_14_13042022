import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux"
import { selectEmployeeList } from '../utils/selectors'
import { dataTableLegends } from '../utils/constants'
import '../styles/EmployeeList.css'

function EmployeeList() {
    let employeeList = useSelector(selectEmployeeList)
    return(
        <div>
            <DataTable data={employeeList} columns={dataTableLegends} pagination/>
        </div>
    )
}

export default EmployeeList