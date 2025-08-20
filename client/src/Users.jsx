import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users,setUsers] = useState([{
        Name:"Ali" , Email:"ali123@gmail..com" , Age: 24
    }])
    return(
        <div className="d-flex vh-100 bg-info align-items-center justify-content-center" >
            <div className="w-50 bg-white rounded p-3" >
                <Link className="btn btn-success" to={"/create"} >Add+</Link>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return <tr>
                                    <td>{ user.Name }</td>
                                    <td>{ user.Email }</td>
                                    <td>{ user.Age }</td>
                                    <td>
                                        <Link className="btn btn-success" to={"/update"} >Update</Link>
                                        <Link className="btn btn-success" to={""} >Delete</Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;