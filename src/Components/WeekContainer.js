import React, { Component } from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import Form from './Form';
import DayCardToggle from './DayCardToggle';



const API_KEY = '2a55d5ed42d7d8c33521dbfc6b886e75';
 class WeekContainer extends Component{
     state = {
        
        
         fullData: [],
         dailyData: [],
         oneDayData: [],
         degreeType: "metric",
         city: undefined,
         country: undefined,
         error: ''
         
     }
 
     updateDegreeType = event => {
         console.log("e", event.target)
        
        this.setState({
          degreeType: event.target.value
        })
      }
    //   getWeather = (e)=>{
    //     e.preventDefault();
    //     console.log('weather', e.target.elements.city.value)
    //     const city =  e.target.elements.city.value;
      
    //   this.setState({
    //       city: city,
    //   }, () => console.log(this.state))
      
    // }
     


     getWeather  = (e) =>{
         e.preventDefault();
         console.log('weather', e.target.elements.city.value)
         const city = e.target.elements.city.value;
         const country = e.target.elements.country.value;
        //  const oneDayWeatherURL = 
        //  `https://api.openweathermap.org/data/2.5/weather?q=${city},${country},uk&lang=eng&units=metric&APPID=${API_KEY}`;
        //  console.log(oneDayWeatherURL);
        //  fetch(oneDayWeatherURL)
        //     .then(res=>res.json())
        //     .then(data => {
        //         const oneDayData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
        //         this.setState({
        //             city: city,
        //             country: country,
        //             fullData: data.list,
        //             oneDayData: oneDayData,
        //             dailyData: [],
        //             error: ''
                
        //         }, () => console.log('oneDay', this.state))
        //     })

        const weatherURL = 
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&lang=eng&units=metric&APPID=${API_KEY}`;
        console.log(weatherURL);
        fetch(weatherURL)
            .then(res=>res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
             
                const oneDay = data.list.slice(0, 1).filter(reading => reading.dt_txt);
               
                    this.setState({
                        city: city,
                        country: country,
                        fullData: data.list,
                        dailyData: dailyData,
                        oneDayData: oneDay,
                        error: ''
                    
                    }, () => console.log('getweather', this.state))
            })
     }
     
 

     
     formatDayCards = () =>{
         
         
            return this.state.dailyData.map((read, index)=> <DayCard read={read} degreeType={this.state.degreeType} key={index} city={this.state.city}/>)
         
      
     }
     oneDay = () => {
         return  this.state.oneDayData.map((read, index)=> <DayCard read={read} degreeType={this.state.degreeType} key={index} city={this.state.city}/>)
     }



     render(){

         return(
             <div>
                 <h1>Day Forecast</h1>
                 <h3>{this.state.city}</h3>
                 <Form city={this.state.city} getWeather={this.getWeather} />
                 <DegreeToggle degreeType={this.state.degreeType} updateDegreeType={this.updateDegreeType}/>
                 <DayCardToggle/>
            <div className="card">{this.formatDayCards()}</div> 
            <div className="card">{this.oneDay()}</div> 
             </div>
         )
     }
 }


export default WeekContainer;
