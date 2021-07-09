import React from 'react'
import M from 'materialize-css'

const Formulario = () => {
    M.updateTextFields();
    
    return ( 
    <form>
        <div className='input-field col s12'>        
                <input 
                    type='text' 
                    name='cuidad'
                    id='cuidad' 
                />
                <label htmlFor='cuidad'>Cuidad: </label>
        </div>
        
        <div className='input-field col s12'>
        
            <select id='pais' name='pais'> 
            <option value="" disabled selected>-- Seleccione un país --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
            </select>
            <label  >País: </label>
        </div>
    </form> 
    );
}
 
export default Formulario;