import '../../styles/Form.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

function EmployeeForm() {
    return (
        <section className="form-wrapper">
            <h1 className='form-title'>New Employee</h1>
            <form action="#" id='create-employee-form' className="form" >
                <fieldset className='fieldset-name'>
                    <legend>Employee</legend>
                    <div className='input-container'>
                        <label className='input-label'>First Name</label>
                        <input type='text'></input>
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


            </form>
        </section>
    )
}

export default EmployeeForm