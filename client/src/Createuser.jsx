import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
    const [name , setName] = useState()
    const [email , setEmail] = useState() 
    const [age , setAge] = useState() 
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault(); 
        axios.post("http://localhost:8001/createUser" , { name,email,age })
        .then(result => { 
            console.log(result)
            navigate('/')
        }
        )
        .catch(err => console.log(err))
        
    }

    return(
        <div className="d-flex vh-100 bg-info align-items-center justify-content-center" >
            <div className="w-50 bg-white rounded p-3" >
                <form onSubmit={Submit} >
                    <h2>Add Users</h2>
                    <div className="mb-2" >
                        <label htmlFor="">Name</label>
                        <input className="form-control"  type="text" placeholder="Enter Name"
                        onChange={ (e)=>setName(e.target.value) }  />
                    </div>
                    <div className="mb-2" >
                        <label htmlFor="">Email</label>
                        <input className="form-control"  type="email" placeholder="Enter Email"
                        onChange={ (e)=>setEmail(e.target.value) } />
                    </div>
                    <div className="mb-2" >
                        <label htmlFor="">Age</label>
                        <input className="form-control"  type="text" placeholder="Enter Age"
                        onChange={ (e)=>setAge(e.target.value) } />
                    </div>
                    <button className="btn btn-success" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;