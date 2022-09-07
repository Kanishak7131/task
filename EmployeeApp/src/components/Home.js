import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { Employeelist } from './Employeelist';

export const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div >
                    <h2 >Employee Management</h2>
                    <Heading />
                    <Employeelist />
                </div>
            </div>
        </Fragment>
    )
}