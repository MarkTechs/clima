import React from 'react'
import PropTypes from 'prop-types';


const Clima = ({resultado}) => {
    const {name, main}= resultado;
    if(!name) return null;
    
    
    const kelvin = 276.15;

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>
                    El clima de {name} es:
                </h2>

                <p className='temparatura'>{
                    parseFloat(main.temp-kelvin, 10).toFixed(2)
                }<span> &#x2103;</span>
                </p> 

                <p className='temparatura'> temparatura máxima
                    {parseFloat(main.temp_max-kelvin, 10).toFixed(2)}<span> &#x2103;</span>
                </p> 

                <p className='temparatura'> temparatura minima
                    {parseFloat(main.temp_min-kelvin, 10).toFixed(2)}<span> &#x2103;</span>
                </p> 
 
            </div>
        </div>
    );
}
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired,
}

export default Clima;