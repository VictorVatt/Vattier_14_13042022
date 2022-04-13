import '../../styles/Form.css'

function EmployeeForm() {
    return (
        <section className="form-wrapper">
            <h1 className='form-title'>New Employee</h1>
            <form action="#" id='create-employee-form' className="form" >
                <fieldset >
                    <legend>Employee</legend>
                    <div>
                        <label>First Name</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input type='date'></input>
                    </div>
                </fieldset>


            </form>
        </section>
    )
}

export default EmployeeForm