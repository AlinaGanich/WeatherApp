import React from 'react';

const Form = ({city, getWeather}) => {
    return(
        <div>
            <form onSubmit={getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                {/* <input type="text" name="country" placeholder="Country..."/> */}
          
                {/* <input type="button" name="fav" value="Odessa" /> */}
                <button>Get Weather</button>
               

            </form>



        </div>
    );
}
export default Form;