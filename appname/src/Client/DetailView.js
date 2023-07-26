import { useLocation } from "react-router-dom";
import "./DetailView.css"; 
import { useState } from "react";
import Business from "./Business"
import FlightSeat from "./FlightSeat";
const DetailView = () => {
  const location = useLocation();
  const data = location.state.value;
  const createclass=["Business","secondary"];
  
  return (
    <>
    <div className="detail-container">
      <h2>{data.name}</h2>
      <p>State: {data.State}</p>
      <p>From: {data.From}</p>
      <p>To: {data.To}</p>
      <p>Time: {data.Time}</p>
    </div>
   <div>
   <Business value={data}/>
 <FlightSeat value={data}/>
 </div>
  </>
  );
};

export default DetailView;
