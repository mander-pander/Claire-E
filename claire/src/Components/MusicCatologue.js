import {useState} from 'react';

const MusicCatologue = () => {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
      setIsShown(current => !current);
  };


return (
  <div>
      <button onClick={handleClick}>Music Catologue</button>
      {isShown && (
          <div>
              <h1>Music Catologue</h1>
          </div>
      )}
  </div>
)
}

export default MusicCatologue;
