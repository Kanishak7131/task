import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./style.css"

export const Addemployee = () => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [designation, setDesignation] = useState('');
    const { addEmployee, employees } = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            name,
            salary,
            designation
        }
        addEmployee(newEmployee);
        history.push("/");
    }

    return (
        <Fragment>
            <div >
                <h2>Add Employee</h2>
                <form onSubmit={onSubmit}>
                    <div className='form-name-element' >
                        <label htmlFor="name" className='form-element'>
                            Name of employee:-
                        </label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div >
                        <label htmlFor="salary" className='form-element'>
                            Salary:-
                        </label>
                        <input value={salary} onChange={(e) => setSalary(e.target.value)} type="number" placeholder="Enter salary" />
                    </div>
                    <div >
                        <label htmlFor="designation" className='form-element' >
                            Designation:-
                        </label>
                        <input value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Enter designation" />
                    </div>
                    <div >
                        <button className='form-element'>
                            Add Employee
                        </button>
                    </div>
                    <div className='form-element-button'><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}