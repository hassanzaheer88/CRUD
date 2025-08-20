import React from "react";

function UpdateUser() {
    return(
        <div className="d-flex vh-100 bg-info align-items-center justify-content-center" >
            <div className="w-50 bg-white rounded p-3" >
                <form>
                    <h2>Update Users</h2>
                    <div className="mb-2" >
                        <label htmlFor="">Name</label>
                        <input className="form-control"  type="text" placeholder="Enter Name"/>
                    </div>
                    <div className="mb-2" >
                        <label htmlFor="">Email</label>
                        <input className="form-control"  type="text" placeholder="Enter Email"/>
                    </div>
                    <div className="mb-2" >
                        <label htmlFor="">Age</label>
                        <input className="form-control"  type="text" placeholder="Enter Age"/>
                    </div>
                    <button className="btn btn-success" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;