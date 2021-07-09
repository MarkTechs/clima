import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/formulario';




function App() {
  return (
    <Fragment>
     
     <Header

      titulo={'Clima React'}
     
     />
  <nav>
      <div className='contenedor-form'>
            <div className='container'>
                <div className='row'>
                    <div className='col m6 s12 '><Formulario/></div>
                    <div className='col m6 s12 '>2</div>
                </div>
            </div>            
        </div>
  </nav>
    

    </Fragment>
  );
}

export default App;
