import React from 'react';
import { Link } from 'react-router-dom';


export const Heading = () => {
    return (
        <div>
            <div >
                <div >
                    <h5 >Employee Listing</h5>
                </div>
                <div >
                    <Link to="/add">
                        <button >
                            <span >Add Employee</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
