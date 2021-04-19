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

              <Formulario />

              <ListadoRecetas />
            
            </div>
            }


        </DetailsProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
