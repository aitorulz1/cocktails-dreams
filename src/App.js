import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>

        <Header />

          <Formulario />

      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
