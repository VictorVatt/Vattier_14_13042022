import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { newEmployee } from '../../utils/reducers/newEmployeeReducer'
import { departments, initialEmployeeState } from '../../utils/constants'
import Select from 'react-select'
import { USstates } from '../../utils/constants'
import '../../styles/Form.css'


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
        <div style={{display: "flex", alignItems: "center", flexDirection: 'column'}}>
            <Link className='header-link' to={'/list'}>View current employee</Link>
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
                            <input type='date' id='birthdate' name='birthdate' value={employeeData.birthdate}
                                    onChange={(e) => {
                                        setEmployeeData((employeeState) => ({
                                            ...employeeState,
                                            [e.target.id]: e.target.value
                                        }))
                                    }}></input>
                        </div>
                        <div className='input-container'>
                            <label className='input-label'>Start Date</label>
                            <input type='date' id='startDate' name='startDate' value={employeeData.startDate}
                                    onChange={(e) => {
                                    setEmployeeData((employeeState) => ({
                                        ...employeeState,
                                        [e.target.id]: e.target.value
                                    }))
                                }}></input> 
                        </div>
                    </fieldset>
                    <fieldset className='fieldset-adress'>
                        <legend>Adress</legend>
                        <div className='input-container'>
                            <label className='input-label'>Street</label>
                            <input type='text' id='street' name='street' value={employeeData.street}
                                    onChange={(e) => {
                                        setEmployeeData((employeeState) => ({
                                            ...employeeState,
                                            [e.target.id]: e.target.value
                                        }))
                                    }}></input>
                        </div>
                        <div className='input-container'>
                            <label className='input-label'>City</label>
                            <input type='text' id='city' name='city' 
                                    onChange={(e) => {
                                        setEmployeeData((employeeState) => ({
                                            ...employeeState,
                                            [e.target.id]: e.target.value
                                        }))
                                    }}></input>
                        </div>
                        <div className='input-container'>
                            <label className='input-label'>State</label>
                            <Select options={USstates} className='dropdown-menu' id='state' name="state"
                                    onChange={(e) => {
                                        setEmployeeData((employeeState) => ({
                                            ...employeeState,
                                            state: e.label
                                        }))
                                }}/>
                        </div>
                        <div className='input-container'>
                            <label className='input-label'>ZipCode</label>
                            <input type='number' id="zipCode" name='zipCode' 
                                    onChange={(e) => {
                                        setEmployeeData((employeeState) => ({
                                            ...employeeState,
                                            [e.target.id]: e.target.value
                                        }))
                                    }}></input>
                        </div>
                    </fieldset>
                    <div className='input-container'>
                            <label className='input-label'>Department</label>
                            <Select options={departments} className='dropdown-menu' id='department' name="department"
                                    onChange={(e) => {
                                        setEmployeeData((employeeState) => ({
                                            ...employeeState,
                                            department: e.label
                                        }))
                                }}/>
                        </div>
                    <button type='button' className='buttonDefault' onClick={handleSubmit}>Save</button>
                    <p></p>
                </form>
            </section>
        </div>
    )
}

export default EmployeeForm