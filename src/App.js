import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/formulario';
import Clima from './components/clima';
import Error from './components/error';


function App() {

  const[busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais: ''
});

  const [consultar, guardarConsultar] = useState(false);

  const [error, guardarError] = useState(false);

  const [resultado, guardarResultado] = useState({});


  const {ciudad, pais} = busqueda;


useEffect(() =>{
  const consultarApi = async () =>{  
  if(consultar){
    const appId ='9615f4b4ea56d013a90f49128a0e289d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    const rs = await fetch(url);
    const result = await  rs.json();

    guardarResultado(result);
    guardarConsultar(false);

    if(result.cod === '404'){
      guardarError(true);

    }else{
      guardarError(false);
    }

  }
    
    
  }
  consultarApi();
  // eslint-disable-next-line
}, [consultar]);

  let component;

  if(error){
      component = <Error mensaje='no hay resultados' />
  }
  else{
    component = <Clima 
    resultado={resultado}
    />
  }

  return (
    <Fragment>
     
     <Header

      titulo={'Clima React'}
     
     />
  
      <div className='contenedor-form'>
            <div className='container'>
                <div className='row'>
                    <div className='col m6 s12 '>
                      <Formulario
                      busqueda={busqueda}
                      guardarBusqueda={guardarBusqueda}
                      guardarConsultar={guardarConsultar}
                      />
                      </div>
                    <div className='col m6 s12 '>
                      {component}
                    </div>
                </div>
            </div>            
        </div>
  
    

    </Fragment>
  );
}

export default App;
