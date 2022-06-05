import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handlerChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();

    const datas = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password
    }

    axios.post("http://localhost:8080/loginregister/insert.php", datas)
    .then(result => {
      if(result.status === 200){
        navigate('/login')
      }else{
        alert('Something went wrong.')
      }
    })
  }

  return (
    <div className="main-box">
      <div className="row">
        <div className="col-md-12 text-center"></div>
        <form className="row" onSubmit={submitHandler}>
          <div className="col-md-6">
            <input type="text" placeholder="first name" name="first_name" onChange={handlerChange} value={data.first_name}/>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="last name" name="last_name" onChange={handlerChange} value={data.last_name}/>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="email" name="email" onChange={handlerChange} value={data.email}/>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="password" name="password" onChange={handlerChange} value={data.password}/>
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
