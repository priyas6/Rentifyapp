import React from 'react'
import { useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NewProperty.css'; 
import {AddProperty} from '../Services/Api'
function NewProperty() {
    const Navigate=useNavigate()
    const location=useLocation()
    const [formData, setFormData] = useState({
        
        location: '',
        area: '',
        bedroom: '',
        bathroom: '',
        nearBy: '',
        description: '',
        price:'',
        userId:location.state.userId
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log(formData);
        await AddProperty(formData);
        Navigate("/MyProperties",{state:{"userId":location.state.userId}})

      };
    
      return (
        <div className="property-form-container">
            <h2>Property Details</h2>
          <form onSubmit={handleSubmit}>
            
            <label>
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label>
              Area (in sq ft):
              <input type="number" name="area" value={formData.area} onChange={handleChange} />
            </label>
            <label>
              Bedroom:
              <input type="number" name="bedroom" value={formData.bedroom} onChange={handleChange} />
            </label>
            <label>
              Bathroom:
              <input type="number" name="bathroom" value={formData.bathroom} onChange={handleChange} />
            </label>
            <label>
              Nearby:
              <input type="text" name="nearBy" value={formData.nearBy} onChange={handleChange} />
            </label>
            <label>
            <label>
              Price:
              <input type="number" name="price" value={formData.price} onChange={handleChange} />
            </label>
              Description:
              <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            </label>
            <button className="large-button" type="submit">Submit</button>
          </form>
        </div>
      );
    };

export default NewProperty
