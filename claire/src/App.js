import Home from './Components/Home';
import About from './Components/About';
import Lessons from './Components/Lessons';
import Composition from './Components/Composition';
import MusicCatologue from './Components/MusicCatologue';
import Recordings from './Components/Recordings';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Lessons />
      <Composition />
      <MusicCatologue />
      <Recordings />
      <Contact />
    </div>
  );
}

export default App;
