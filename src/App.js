import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { useState } from 'react'

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <Header isClicked={isClicked} setIsClicked={setIsClicked} />
      <Home />
    </div>
  );
}

export default App;
