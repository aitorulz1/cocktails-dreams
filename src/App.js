import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import ListadoRecetas from './components/Recetas/ListadoRecetas';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import DetailsProvider from './context/DetailsContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <DetailsProvider>

          <Header />

            <Formulario />

            <ListadoRecetas />

        </DetailsProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
