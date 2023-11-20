import React, { useEffect, useState } from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import Fullpage from "./Fullpage";
import { Link } from "react-router-dom";
function Profile() {

    const [user, setUser] = useState([]);

    const params = useParams();
    const id = params.id;
    useEffect(() => {
        fetch("/data.json")
          .then((response) => response.json())
          .then((data) => setUser(data.emp))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

      let filteredData = user;

        if(id)
        {
          filteredData = user.filter(item => item.id === parseInt(id));
        }
        console.log(filteredData);
  return (
    <>
    <Fullpage/>
      {filteredData.map((filteredData,index) =>
      {
        return (
        <section className="vh-100" key={index} style={{ backgroundcolor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3 border-0">
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white p-4"
                    style={{borderTopLeftRadius:'6.5rem' , borderBottomLeftRadius:'.5rem'}}
                  >
                    <img
                      src={filteredData.image}
                      alt="Avatar"
                      className="img-fluid my-5 bg-white"
                      style={{height:'150px',width:'150px',borderRadius:'50%'}}
                      />
                    <h4 >{filteredData.fullName}</h4>
                    <hr/>
                    <i className="far fa-edit mb-5"></i>
                    <button
                        type="button"
                        className="btn btn-link btn-sm btn-rounded"
                      >
                        <Link
                          to={`/`}
                          className="fw-bold text-black previous"
                        >
                         &laquo; Back
                        </Link>
                      </button>
                  </div>
                  <div className="col-md-8 gradient-custom2 text-white" style={{ borderBottomRightRadius:'6.5rem'}}>
                    <div className="card-body p-4">
                    <h3 className="fw-bold text-black">Personal Information</h3>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className="fw-bold">Email</h6>
                          <p >{filteredData.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="fw-bold">Phone</h6>
                          <p >{filteredData.phone}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="fw-bold">Birth Date</h6>
                          <p >{filteredData.birthDate}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="fw-bold">Address</h6>
                          <p >{filteredData.address.address},{filteredData.address.city}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="fw-bold">Joining Date</h6>
                          <p >{filteredData.joiningDate}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="fw-bold">Aadhar Number</h6>
                          <p >{filteredData.aadharNumber}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="fw-bold">Pan Number</h6>
                          <p >{filteredData.PanNumber}</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)})}
   </> 
  );
}

export default Profile;
