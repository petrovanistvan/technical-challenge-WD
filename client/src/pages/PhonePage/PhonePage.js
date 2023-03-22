import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PhonePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [phone, setPhone] = useState();

  const fetchPhone = async () => {
    try {
      const response = await fetch(
        `http://localhost:5005/phones/${id}`
      );
      const parsed = await response.json();
      if (parsed === null) {
        navigate("/404");
      } else {
        console.log(parsed);
        setPhone(parsed.selectedPhone);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhone();
  });

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
    <div style={{width: "100%", height: "auto", display: "flex", justifyContent: "center"}}>
      <div style={{width: "350px", height: "auto", backgroundColor: "white", padding: "10px", margin: "10px", border: "none", borderRadius: "5%"}}>
        {/* <h1>{phone.name}</h1>
        <p>Price: {phone.price}</p>
        <p>Description: {phone.description}</p>
        <p>Manufacturer: {phone.manufacturer}</p> */}
      </div>
    </div>
    
    <br></br>
    </>
  );
};

export default PhonePage;