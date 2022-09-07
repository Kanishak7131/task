import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Editemployee = (route) => {
    let history = useHistory();
    const { employees, editEmployee } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ id: null, name: '', designation: '', salary: '' });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find(emp => emp.id === parseInt(employeeId));
        setSeletedUser(selectedUser);
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editEmployee(selectedUser);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedUser({ ...selectedUser, [userKey]: value })

    if (!selectedUser || !selectedUser.id) {
        return <div>sdf</div>
    }

    return (
        <Fragment>
            <div >
                <form onSubmit={onSubmit}>
                    <div >
                        <label htmlFor="name">
                            Name of employee
                        </label>
                        <input value={selectedUser.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div >
                        <label htmlFor="location">
                            salary
                        </label>
                        <input value={selectedUser.salary} onChange={(e) => handleOnChange('salary', e.target.value)} type="text" placeholder="Enter salary" />
                    </div>
                    <div >
                        <label htmlFor="designation">
                            Designation
                        </label>
                        <input value={selectedUser.designation} onChange={(e) => handleOnChange('designation', e.target.value)} type="text" placeholder="Enter designation" />
                    </div>
                    <div >
                        <button >
                            Edit Employee
                        </button>
                    </div>
                    <div ><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}