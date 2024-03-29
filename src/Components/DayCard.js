import React from 'react';
var moment = require('moment');

 const DayCard = ({read, degreeType, city}) =>{
        let newDate = new Date();
        const weekday = read.dt *1000;
        newDate.setTime(weekday);
        const celsius = Math.round(read.main.temp);
        const fahrenheit = Math.round((celsius * 9/5) + 32);
        const imgURL = `owf owf-${read.weather[0].id} owf-5x`

  return (
    <div>
      <div className="card__item">
        <h3>{moment(newDate).format('dddd')}</h3>
        <p>{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <i className={imgURL}></i>
        <h2>{degreeType === "imperial" ? fahrenheit + "°F" : celsius + "°C"}</h2>
       
        <div>
          <p>{read.weather[0].description}</p>
        </div>
      </div>
    </div>
  )

 }

 


export default DayCard;