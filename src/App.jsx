import Cabecalho from './components/Cabecalho';
import Destaque from './components/Destaque';
import Catalogo from './components/Catalogo';
import Rodape from './components/Rodape';
import './App.css';

function App() {
  return (
    <div className="pagina" id="inicio">
      <Cabecalho />
      <Destaque />

      <main>
        <Catalogo />
      </main>

      <Rodape />
    </div>
  );
}

export default App;