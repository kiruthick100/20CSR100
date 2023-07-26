import axios from 'axios';
import './DisplayTrain.css';
import TrainImage  from "../Image/train.jpeg"
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DisplayTrain = () => {
  const [AllTrain, SetAllTrain] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);
  const [nextDate, setNextDate] = useState(null);
  const [nextMonth, setNextMonth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const one = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/AllTrain")
        SetAllTrain(response.data.data);
        AllTrain.sort()
        
      } catch (error) {
        console.error(error);
      }

      const getCurrentDate = () => {
        const today = new Date();
        setCurrentDate(today);

        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        setNextDate(nextDay);

        const nextMonthDate = new Date(today);
        nextMonthDate.setMonth(today.getMonth() + 1);
        setNextMonth(nextMonthDate);
      };

      getCurrentDate();
    };
    one();
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
  };
  const DetailView=(value)=>
  {
    navigate("/DetailView",{ state: {value: value} });
  }

  return (
    <div className="train-container">
      {AllTrain.length > 0 ? (
        AllTrain.map((value, index) => (
          <div
            className="flight-list"
            key={index}
            onClick={() => {DetailView(value) }}
          >
                        <img src={TrainImage} alt="Train" className="FlightImage" />

            <div className="flight-info">
              <div className="flight-info-header">{value.To}</div>
              <div className="flight-info-item">{value.From}</div>
              <div className="flight-info-item">{value.Date}</div>
              <div className="flight-info-item">{value.Time}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="not-available">"Oops, not available"</div>
      )}
    </div>
  );
};

export default DisplayTrain;
