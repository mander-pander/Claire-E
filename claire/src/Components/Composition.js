import {useState} from 'react';

const Composition = () => {
    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown(current => !current);
    };


  return (
    <div>
        <button onClick={handleClick}>Composition</button>
        {isShown && (
            <div>
                <h1>Composition</h1>
            </div>
        )}
    </div>
  )
}

export default Composition;
