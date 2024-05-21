import React, { useEffect ,useState} from 'react'
import { getOwner, getProperties } from '../Services/Api'
function BuyerHome() {
 
    const [properties, setProperties] = useState([]);
    const[owner,setOwner]=useState([])
    const [isSelected,setSelected]=useState(false)
    useEffect(()=>{
        fetchProperties()
    },[])

    const fetchProperties=async()=>
    {
        const arr=await getProperties();
        setProperties(arr)

    }
    const getOwnerdetails=async(userId)=>
    {

      const arr2=await getOwner(userId);
      setOwner(arr2);
      console.log(arr2);
      setSelected(true)
      
      
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
                <button style={{ textAlign: "right" }} onClick={() => getOwnerdetails(property.userId)}>I am Interested</button>
              </div>
              {isSelected && (
            <div className='owner-details'>
            <p>Email:{owner[0].email}</p>
            <p>Name:{owner[0].firstName+" "+owner[0].LastName}</p>
            <p>Phone number:{owner[0].phoneNumber}</p>
            </div>
            )}
            </div>
          ))
        }
           
            </div>
          
      </div>
  )
}

export default BuyerHome
