import React from 'react'
import './Employee.css'
import { user } from './EmployeeDetails'
const Employee = () => {
    return <div><table id="Employee-details">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone No.</th>
            </tr>
        </thead>
        <tbody>
            {user.map((i, idx) => {
                return (
                    <tr key={idx}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.gender}</td>
                        <td>{i.email}</td>
                        <td>{i.phoneNo}</td>
                    </tr>
                )
            })}
        </tbody>
    </table> </div>
}
export default Employee