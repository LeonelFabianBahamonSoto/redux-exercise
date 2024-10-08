import './App.css';

import logo from './logo.svg';

import Counter from './counter/Counter';
import { PokemonApp } from './pokemon/PokemonApp';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Counter /> */}
        <PokemonApp />

      </header>
    </div>
  );
}

export default App;
