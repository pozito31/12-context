import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const curso = {
    id: 1,
    titulo: "Máster en TypeScript",
    contenido: "Muchas horas de contenido..."
  };

  return (
    <div className="App">
      <header className="App-header">

        <PruebaContext.Provider value={curso}>
          <AppRouter />
        </PruebaContext.Provider>
          
      </header>
    </div>
  );
}

export default App;
