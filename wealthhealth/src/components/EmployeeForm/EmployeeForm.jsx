import { useState } from 'react'
import { useDispatch } from "react-redux"
import { newEmployee } from '../../utils/reducers/newEmployeeReducer'
import { initialEmployeeState } from '../../utils/constants'

import '../../styles/Form.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

function EmployeeForm() {

    const [employeeData, setEmployeeData] = useState(initialEmployeeState)

    const dispatch = useDispatch()

     const handleSubmit = (e) => {
        e.preventDefault()
        if (employeeData.firstName.length === 0 || employeeData.lastName.length === 0 ) {
            console.log("ya une couille dans le paté")
        } else {
            console.log(employeeData)
            dispatch(newEmployee(employeeData))
        }

     }
    return (
        <section className="form-wrapper">
            <h1 className='form-title'>New Employee</h1>
            <form action="#" id='create-employee-form' className="form" >
                <fieldset className='fieldset-name'>
                    <legend>Employee</legend>
                    <div className='input-container'>
                        <label className='input-label'>First Name</label>
                        <input type='text' id='firstName'name='firstName' value={employeeData.firstName} 
                                onChange={(e) => {
                                setEmployeeData((employeeState) => ({
                                    ...employeeState,
                                [e.target.id]: e.target.value

                                }))
                            }}>
                        </input>
                    </div>
                    <div className='input-container'>
                        <label className='input-label'>Last Name</label>
                        <input type='text' id='lastName' name='lastName' value={employeeData.lastName}
                                onChange={(e) => {
                                    setEmployeeData((employeeState) => ({
                                        ...employeeState,
                                        [e.target.id]: e.target.value
                                    }))
                                }}></input>
                    </div>
                    <div className='input-container'>
                        <label className='input-label'>Date of Birth</label>
                        <input type='date'></input>
                    </div>
                    <div className='input-container'>
                        <label className='input-label'>Start Date</label>
                        <input type='date'></input> 
                    </div>
                </fieldset>
                <fieldset className='fieldset-adress'>
                    <legend>Adress</legend>
                    <div className='input-container'>
                        <label className='input-label'>Street</label>
                        <input type='text'></input>
                    </div>
                    <div className='input-container'>
                        <label className='input-label'>City</label>
                        <input type='text'></input>
                    </div>
                    <div className='input-container'>
                        <label className='input-label'>State</label>
                        <DropdownMenu />
                    </div>
                    <div className='input-container'>
                        <label className='input-label'>ZipCode</label>
                        <input type='text'></input>
                    </div>
                </fieldset>
                <button type='button' className='buttonDefault' onClick={handleSubmit}>Save</button>
                <p></p>
            </form>
        </section>
    )
}

export default EmployeeForm