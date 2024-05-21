import React, { useState } from 'react';
import './Login.css'; // Assuming you have a CSS file named Login.css for styling
import { userlogin } from '../Services/Api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const Navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission here, such as sending data to backend or displaying it
    
    const response=await userlogin(formData)
    console.log(response);
    if (response.length==0)
      alert("Invalid user details")
      else
      {
        if (response[1]==='0')
        Navigate("/Buyer/Properties",{ state: { "userId": response[0] } })
        else
        Navigate("/MyProperties",{state: { "userId": response[0] }})
}
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
