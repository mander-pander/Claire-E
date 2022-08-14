import Navigation from './Navigation/Nav';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Lessons from './Components/Lessons';
import Composition from './Components/Composition';
import MusicCatalogue from './Components/MusicCatalogue';
import Recordings from './/Components/Recordings';
import Contact from './Components/Contact';
import styles from './App.css';

function App() {
  const [location, setLocation] = useState('Home');

  let page;
  if (location === 'Home') {
    page = <Home />;
  } else if (location === 'About') {
    page = <About />;
  } else if (location === 'Lessons') {
    page = <Lessons />;
  } else if (location === 'Composition') {
    page = <Composition />;
  } else if (location === 'MusicCatalogue') {
    page = <MusicCatalogue />;
  } else if (location === 'Recordings') {
    page = <Recordings />;
  } else if (location === 'Contact') {
    page = <Contact />;
  }


  return (
    <div className={styles.App}>
      <Navigation setLocation={setLocation}/>
      <div>{page}</div>

    </div>
  );
}

export default App;
