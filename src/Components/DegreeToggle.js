import React from 'react';

const DegreeToggle = ({degreeType, updateDegreeType})=>{
    return(
        <React.Fragment>
          <div>
            <input
            type="radio"
            name="degree-type"
            id="celsius"
            value="metric"
            checked={degreeType === "metric"}
            onChange={(e) => updateDegreeType(e)}
            />
            <label>Celsius</label>
          </div>
          <div>
            <input
            type="radio"
            name="degree-type"
            id="farenheit"
            value="imperial"
            checked={degreeType === "imperial"}
            onChange={(e) => updateDegreeType(e)}
            />
            <label>Farenheit</label>
          </div>
        </React.Fragment>
    )

}


export default DegreeToggle;