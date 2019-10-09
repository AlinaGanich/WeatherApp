import React, { Component } from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import Form from './Form';



const API_KEY = '2a55d5ed42d7d8c33521dbfc6b886e75';
 class WeekContainer extends Component{
     state = {
        
        
         fullData: [],
         dailyData: [],
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

        const weatherURL = 
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&lang=eng&units=metric&APPID=${API_KEY}`;
        console.log(weatherURL);
        fetch(weatherURL)
            .then(res=>res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
               
                    this.setState({
                        city: city,
                        country: country,
                        fullData: data.list,
                        dailyData: dailyData,
                        error: ''
                    
                    }, () => console.log('getweather', this.state))
            })
     }
     
 

     
     formatDayCards = () =>{
         
            return this.state.dailyData.map((reading, index)=> <DayCard reading={reading} degreeType={this.state.degreeType} key={index} city={this.state.city}/>)
         
      
     }



     render(){

         return(
             <div>
                 <h1>Day Forecast</h1>
                 <h3>{this.state.city}</h3>
                 <Form city={this.state.city} getWeather={this.getWeather} />
                 <DegreeToggle degreeType={this.state.degreeType} updateDegreeType={this.updateDegreeType}/>
            <div className="card">{this.formatDayCards()}</div> 
             </div>
         )
     }
 }


export default WeekContainer;
