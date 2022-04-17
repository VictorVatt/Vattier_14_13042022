import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { newEmployee } from '../../utils/reducers/newEmployeeReducer'
import { departments, initialEmployeeState } from '../../utils/constants'
import Select from 'react-select'
import { USstates } from '../../utils/constants'
import '../../styles/Form.css'
import DatePicker from "react-datepicker"
import SubmitModal from '../Modal/SubmitModal'
import "react-datepicker/dist/react-datepicker.css";


function EmployeeForm() {

    const [employeeData, setEmployeeData] = useState(initialEmployeeState)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

     const handleSubmit = (e) => {
        e.preventDefault()
        if (employeeData.firstName.length === 0 || employeeData.lastName.length === 0 || 
            employeeData.birthdate.length === 0 || employeeData.startDate.length === 0 || 
            employeeData.street.length === 0 || employeeData.city.length === 0 || 
            employeeData.state.length === 0 || employeeData.zipCode.length === 0 || 
            employeeData.department.length === 0) {
            setError(true)
        } else {
            setError(false)
            setModalIsOpen(!modalIsOpen)
            dispatch(newEmployee(employeeData))
        }

     }
    return (
        <div style={{textAlign: 'center'}}>
            <Link className='header-link' to={'/list'}>View current employee</Link>
            {error ? <p className='error-message'>Complete all fields</p> : ''}
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
                            <DatePicker  wrapperClassName="datepicker"  dateFormat="MMMM d, yyyy" selected={employeeData.birthdate} id='birthdate' strictParsing
                                                onChange={(date) => {
                                                    setEmployeeData((employeeState) => ({
                                                        ...employeeState,
                                                        birthdate: date
                                                    }))
                                                }}/>
                        </div>
                        <div className='input-container'>
                            <label className='input-label'>Start Date</label>
                            <DatePicker className='date-picker' dateFormat="MMMM d, yyyy" selected={employeeData.startDate} id='startDate' strictParsing
                                                onChange={(date) => {
                                                    setEmployeeData((employeeState) => ({
                                                        ...employeeState,
                                                        startDate: date
                                                    }))
                                                }}/>
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
                    <SubmitModal modalIsOpen={modalIsOpen} stateFunction={setModalIsOpen}/>
                    <button type='button' className='submit-btn' onClick={handleSubmit} >Add a new employee</button>
                    <p></p>
                </form>
            </section>
        </div>
    )
}

export default EmployeeForm