import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import ListadoRecetas from './components/Recetas/ListadoRecetas';
import Cover from './components/Cover/Cover';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import DetailsProvider from './context/DetailsContext';

function App() {

  const [ cover, removeCover ] = useState(true)

  const [ button, showButton ] = useState(false)


  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <CategoriasProvider>
      <RecetasProvider>
        <DetailsProvider>

            {cover ? 
            
            <Cover 
              removeCover={removeCover}
            />

            :

            <div className="page-container">
            
              <Header />

              <Formulario 
                showButton={showButton}
              />

              <ListadoRecetas />

              
                <div className="scrollTop">
                  { button ?
                  <button
                     className='to-top'
                     onClick={scrollTop} 
                  >Go To Top</button>
                  : null
                  }
                </div>
            
            </div>
            }


        </DetailsProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
