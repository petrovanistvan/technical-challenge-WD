import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [phones, setPhones] = useState([]);
  const fetchPhones = async () => {
    try {
      const response = await fetch("http://localhost:5005/phones");
      const parsed = await response.json();
      setPhones(parsed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

 return (
  <>
    <h1>Browse all of our phones:</h1>
    <ul style={{listStyleType: "none", display: "flex", flexWrap: "wrap"}}>
      {phones.map(phone => (
        <li key={phone._id} style={{flex: "0 0 33.333333%"}}>
          <div style={{width: "300px", height: "auto", backgroundColor: "white", padding: "10px", margin: "10px", borderRadius: "5%"}}>
          <Link to={`/phones/${phone._id}`}><p style={{color: "black"}}>{phone.name}</p>
          <img style={{width: "90%", height: "auto", color: "black"}} src={phone.imageFileName} alt="this is a pic"/>
          <p style={{color: "black"}}>€{phone.price}</p>
          </Link>
          </div>
        </li>
      ))}
    </ul>
  </>
)

  
 
}