import React from 'react';
const OneDayCard = ({oneDay}) =>{
    console.log(oneDay)
   
    return (
        <div>
        <div className="card">{oneDay()}</div> 
        {/* <div className="card">HIIIIIIIIIIIIIIIIIi</div>  */}
            
        </div>
    )

}





export default OneDayCard;