import React, { Component } from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import Form from './Form';
import SelectedCities from './SelectedCities';



import {BrowserRouter, Route, Link} from 'react-router-dom'



const API_KEY = '2a55d5ed42d7d8c33521dbfc6b886e75';
 class WeekContainer extends Component{
     state = {
        
        
         fullData: [],
         dailyData: [],
         oneDayData: [],
         degreeType: "metric",
         city: 'Kiev',
         error: ''
         
     }
 
     updateDegreeType = event => {
         console.log("e", event.target)
        
        this.setState({
          degreeType: event.target.value
        })
      }
      getWeather= (e)=>{
        e.preventDefault();
        console.log('weather', e.target.elements.city.value)
        const city =  e.target.elements.city.value;
      
        const weatherURL = 
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=eng&units=metric&APPID=${API_KEY}`;
        console.log(weatherURL);
        fetch(weatherURL)
            .then(res=>res.json())
            .then(data => {
                const fullData = data.list;
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
             
                const oneDay = data.list.slice(0, 1).filter(reading => reading.dt_txt);
               
                   
                    this.setState({
                        city: city,
                        fullData: fullData,
                        dailyData: dailyData,
                        oneDayData: oneDay,
                        error: ''
                    
                    }, () => console.log('getweather', this.state))
                })
      
    }
    getSelected = (e)=>{
   
        e.preventDefault();
        console.log('selected', e.target.value)
        const city =  e.target.value;
      
        const weatherURL = 
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=eng&units=metric&APPID=${API_KEY}`;
        console.log(weatherURL);
        fetch(weatherURL)
            .then(res=>res.json())
            .then(data => {
                const fullData = data.list;
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
             
                const oneDay = data.list.slice(0, 1).filter(reading => reading.dt_txt);
               
                   
                    this.setState({
                        city: city,
                        fullData: fullData,
                        dailyData: dailyData,
                        oneDayData: oneDay,
                        error: ''
                    
                    }, () => console.log('getweather', this.state))
                })
      
    }


    // componentDidMount() {
  
    //     const city = this.state.city;
    //    console.log('city', city)

    //     const weatherURL = 
    //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=eng&units=metric&APPID=${API_KEY}`;
    //     console.log(weatherURL);
    //     fetch(weatherURL)
    //         .then(res=>res.json())
    //         .then(data => {
    //             const fullData = data.list;
    //             const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
             
    //             const oneDay = data.list.slice(0, 1).filter(reading => reading.dt_txt);
               
                   
    //                 this.setState({
    //                     city: city,
    //                     fullData: fullData,
    //                     dailyData: dailyData,
    //                     oneDayData: oneDay,
    //                     error: ''
                    
    //                 }, () => console.log('getweather', this.state))
    //             })
    //  }

     
 

     
     formatDayCards = () =>{
        
            return this.state.dailyData.map((read, index)=> <DayCard read={read} degreeType={this.state.degreeType} key={index} city={this.state.city}/>)
     }
     oneDay = () => {
         return  this.state.oneDayData.map((read, index)=> <DayCard read={read} degreeType={this.state.degreeType} key={index} city={this.state.city}/>)
     }


     render(){

         return(
             <div>
                 <BrowserRouter>
                    <h1>Day Forecast</h1>
                    <h3>{this.state.city}</h3>
                    <Form city={this.state.city} getWeather={this.getWeather} />
                    <DegreeToggle degreeType={this.state.degreeType} updateDegreeType={this.updateDegreeType}/>
                    <SelectedCities city={this.state.city} getSelected={this.getSelected}/>
       
              
                    <button><Link to="/one">For One Day</Link></button>

                    <button><Link to="/formatDayCards">For Five Days</Link></button>
                    <div className="card">
                    <Route path='/one' component={this.oneDay}/>
               
                    <Route path='/formatDayCards' component={this.formatDayCards}/>
                    </div>
           
                
                 
                 </BrowserRouter>
              
       
         
             </div>
         )
     }
 }


export default WeekContainer;
