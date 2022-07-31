import Navigation from './Navigation/Nav';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Lessons from './Components/Lessons';
import Composition from './Components/Composition';
import MusicCatologue from './Components/MusicCatologue';
import Recordings from './/Components/Recordings';
import Contact from './Components/Contact';

import './App.css';

function App() {
  const [location, setLocation] = useState('');

  let page = 'hi';
  if (location === 'Home') {
    page = <Home />;
  } else if (location === 'About') {
    page = <About />;
  } else if (location === 'Lessons') {
    page = <Lessons />;
  } else if (location === 'Composition') {
    page = <Composition />;
  } else if (location === 'MusicCatologue') {
    page = <MusicCatologue />;
  } else if (location === 'Recordings') {
    page = <Recordings />;
  } else if (location === 'Contact') {
    page = <Contact />;
  }


  return (
    <div className="App">
      <Navigation setLocation={setLocation}/>
      <div>{page}</div>

    </div>
  );
}

export default App;
