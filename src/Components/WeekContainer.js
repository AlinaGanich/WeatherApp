import React, { Component } from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';



const API_KEY = '2a55d5ed42d7d8c33521dbfc6b886e75';
 class WeekContainer extends Component{
     state = {
         city: 'Kyiv',
        
         fullData: [],
         dailyData: [],
         degreeType: "metric"
         
     }
     updateDegreeType = event => {
         console.log("e", event.target)
        
        this.setState({
          degreeType: event.target.value
        })
      }


     componentDidMount = (degreeType) =>{
        const weatherURL =
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=eng&units=${this.state.degreeType}&APPID=${API_KEY}`;
        fetch(weatherURL)
            .then(res=>res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                 
                }, () => console.log(this.state))
            })
           
     }
     
     formatDayCards = () =>{
        return this.state.dailyData.map((reading, index)=> <DayCard reading={reading} degreeType={this.state.degreeType} key={index} />)
     }



     render(){

         return(
             <div>
                 <h1>Day Forecast</h1>
                 <h3>Kiev</h3>
                 <DegreeToggle degreeType={this.state.degreeType} updateDegreeType={this.updateDegreeType}/>
            <div className="card">{this.formatDayCards()}</div> 
             </div>
         )
     }
 }


export default WeekContainer;
