import React from 'react'

const Header = ({titulo}) => {
    return (
        <div className='nav-wrapper light-blue darken-2'>
            <a href='#!' className='brand-logo'>  {titulo}</a>
        </div>

          );
}
 
export default Header;