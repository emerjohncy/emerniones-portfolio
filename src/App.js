import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About'
import { useState } from 'react'
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <Header isClicked={isClicked} setIsClicked={setIsClicked} />
      <Home />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
