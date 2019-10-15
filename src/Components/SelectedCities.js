import React from 'react';

const SelectedCities = ({getSelected}) => {
    return(
        <div>
            <form onClick={getSelected} >
        
          
                <input  type="button"  value="Odessa" />
                <input  type="button"  value="Kiev" />
                <input  type="button"  value="Zaporizhzhya" />
                <input  type="button"  value="Lviv" />
                <input  type="button"  value="Kharkiv" />
                
               

            </form>



        </div>
    );
}
export default SelectedCities;