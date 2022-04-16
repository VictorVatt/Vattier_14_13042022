import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux"
import { selectEmployeeList } from '../utils/selectors'
import { dataTableLegends } from '../utils/constants'

function EmployeeList() {
    let employeeList = useSelector(selectEmployeeList)
    console.log(employeeList)
    return(
        <DataTable data={employeeList} columns={dataTableLegends} pagination />
    )
}

export default EmployeeList