import { useContext, useState } from 'react'
import { EmployeeContext } from '../../state/CreateContext'
import {  initialState } from '../../state/employeReducer'
import '../../styles/Form.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

function EmployeeForm() {

    const [newEmployee, setNewEmployee] = useState(initialState)
    const context = useContext(EmployeeContext)
    const [error, setError] = useState("")

     const handleSubmit = (e) => {
        e.preventDefault()
        if (newEmployee.firstName.length === 0) {
            console.log("bloqué")
        } else {
            context.addEmployeeToTheList(newEmployee, error)
            console.log(context)
            setNewEmployee(initialState)
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
                        <input 
                            type='text' 
                            id='firstName'
                            name='firstName' 
                            value={newEmployee.firstName}
                            onChange={(e) => {
                                console.log(newEmployee)
                                setNewEmployee((state) => ({
                                ...state,
                                [e.target.id]: e.target.value

                                }))
                            }}
                        ></input>
                    </div>
                    <div className='input-container'>
                        <label className='input-label'>Last Name</label>
                        <input type='text'></input>
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
                <p>{error}</p>
            </form>
        </section>
    )
}

export default EmployeeForm