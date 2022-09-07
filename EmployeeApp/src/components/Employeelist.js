import React, { Fragment, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import "./style.css"

function display(value) {

}

export const Employeelist = () => {
    const { employees, removeEmployee, editEmployee } = useContext(GlobalContext);
    const [value, setValue] = useState("N/A");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Fragment>
            <div className="dropdown-menu">
                <h5>Filter</h5>
                <select value={value} onChange={handleChange} >
                    <option value="N/A">N/A</option>
                    <option value="Salary">Salary High to Low</option>
                    <option value="Designation-FrontEnd">Designation-FrontEnd</option>
                    <option value="Designation-BackEndEnd">Designation-BackEndEnd</option>
                </select>
            </div>
            <div>
                <span>Name</span>
                <span className="Designation">Designation</span>
                <span className="Salary">Salary</span>
            </div>
            {
                value == "N/A" && employees.length > 0 ? <Fragment>
                    {employees.map(employee => (
                        <div key={employee.id}>
                            <div className='employee-list'>
                                <p >{employee.name}</p>
                                <p >{employee.designation}</p>
                                <p >{employee.salary}</p>
                            </div>
                            <div className='employee-list' >
                                <Link to={`/edit/${employee.id}`}>
                                    <button onClick={() => editEmployee(employee.id)} >
                                        Edit Employee
                                    </button>
                                </Link>
                                <button onClick={() => removeEmployee(employee.id)} >
                                    Delete Employee
                                </button>
                            </div>
                        </div>
                    ))}
                </Fragment> : <p ></p>
            }
            {
                value == "Designation-FrontEnd" && employees.length > 0 ? <Fragment>
                    {employees.filter(el => (el.designation === "Front-end")).map(employee => (
                        <div key={employee.id}>
                            <div className='employee-list'>
                                <p >{employee.name}</p>
                                <p >{employee.designation}</p>
                                <p >{employee.salary}</p>
                            </div>
                            <div className='employee-list' >
                                <Link to={`/edit/${employee.id}`}>
                                    <button onClick={() => editEmployee(employee.id)} >
                                        Edit Employee
                                    </button>
                                </Link>
                                <button onClick={() => removeEmployee(employee.id)} >
                                    Delete Employee
                                </button>
                            </div>
                        </div>
                    ))}
                </Fragment> : <p ></p>
            }
            {
                value == "Designation-BackEndEnd" && employees.length > 0 ? <Fragment>
                    {employees.filter(el => (el.designation === "Back-end")).map(employee => (
                        <div key={employee.id}>
                            <div className='employee-list'>
                                <p >{employee.name}</p>
                                <p >{employee.designation}</p>
                                <p >{employee.salary}</p>
                            </div>
                            <div className='employee-list' >
                                <Link to={`/edit/${employee.id}`}>
                                    <button onClick={() => editEmployee(employee.id)} >
                                        Edit Employee
                                    </button>
                                </Link>
                                <button onClick={() => removeEmployee(employee.id)} >
                                    Delete Employee
                                </button>
                            </div>
                        </div>
                    ))}
                </Fragment> : <p ></p>
            }
            {
                value == "Salary" && employees.length > 0 ? <Fragment>
                    {[].concat(employees)
                        .sort((a, b) => a.itemM > b.itemM ? 1 : -1).map(employee => (
                            <div key={employee.id}>
                                <div className='employee-list'>
                                    <p >{employee.name}</p>
                                    <p >{employee.designation}</p>
                                    <p >{employee.salary}</p>
                                </div>
                                <div className='employee-list' >
                                    <Link to={`/edit/${employee.id}`}>
                                        <button onClick={() => editEmployee(employee.id)} >
                                            Edit Employee
                                        </button>
                                    </Link>
                                    <button onClick={() => removeEmployee(employee.id)} >
                                        Delete Employee
                                    </button>
                                </div>
                            </div>
                        ))}
                </Fragment> : <p ></p>
            }

        </Fragment >
    )
}