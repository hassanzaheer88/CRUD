import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
    const [users,setUsers] = useState([])

    useEffect( ()=>{
        axios.get('http://localhost:8001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))

    }, [] )


    const handleDelete = (id) => {
        axios.delete('http://localhost:8001/deleteUser/' + id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
        
    }

    return(
        <div className="d-flex vh-100 bg-info align-items-center justify-content-center" >
            <div className="w-50 bg-white rounded p-3" >
                <h1 className="text-center" >CRUD Operations</h1>
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
                                    <td>{ user.name }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.age }</td>
                                    <td>
                                        <Link className="btn btn-success" to={`/update/${user._id}`} >Update</Link>
                                        <Link className="btn btn-danger" onClick={ (e) => { handleDelete(user._id) }} >Delete</Link>
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