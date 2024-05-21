import React, { useEffect } from 'react';
import './MyProperties.css'; // Import your CSS file
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { getMyProperties } from '../Services/Api';
import { useLocation } from 'react-router-dom';
function MyProperties(props) {
  const location=useLocation()
  const [properties,setProperties]=useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    fetchProperties()
},[])

const fetchProperties=async()=>
{
  console.log(location.state.userId)
    const arr=await getMyProperties(location.state.userId)
    setProperties(arr)
}
  return (
    <div className="my-properties-container">
      <h2>My Properties</h2>
      <div className="property-list">
        {
          properties.map(property => (
            <div className="property" key={property.propertyId}>
              <div className='property-details'>
                <p>Area: {property.area}</p>
                <p>Number of bathrooms: {property.bathroom}</p>
                <p>Number of bedroom: {property.bedroom}</p>
                <p>Description: {property.description}</p>
                <p>Location: {property.location}</p>
                <p>Nearby: {property.nearBy}</p>
                <h2>Price: Rs.{property.price}</h2>
              </div>
      </div>
          ))
}
</div>
      <button className="large-button" onClick={() => navigate("/NewProperty",{state:{"userId":location.state.userId}})}>Add Property</button>
    </div>
  );
}
export default MyProperties;