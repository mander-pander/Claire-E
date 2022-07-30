import {useState} from 'react';

const Recordings = () => {
    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown(current => !current);
    };


  return (
    <div>
        <button onClick={handleClick}>Recordings</button>
        {isShown && (
            <div>
                <h1>Recordings</h1>
            </div>
        )}
    </div>
  )
}

export default Recordings;
