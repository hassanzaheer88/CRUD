import React, {useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect( ()=>{
        axios.get('http://localhost:8001/getUser/'+id)
        .then(result => {
          console.log(result)
          setName(result.data.name)
          setEmail(result.data.email)
          setAge(result.data.age)

        })
        .catch(err => console.log(err))

    }, [] )

      const Update = (e) => {
        e.preventDefault(); 
        axios.put("http://localhost:8001/updateUser/"+id , { name,email,age })
        .then(result => { 
            console.log(result)
            navigate('/')
        }
        )
        .catch(err => console.log(err))
      }

  return (
    <div className="d-flex vh-100 bg-info align-items-center justify-content-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update} >
          <h2>Update Users</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={ (e)=>setName(e.target.value) }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={ (e)=>setEmail(e.target.value) }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Age"
              value={age}
              onChange={ (e)=>setAge(e.target.value) }
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
