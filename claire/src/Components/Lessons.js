import {useState} from 'react';

const Lessons = () => {
    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown(current => !current);
    };


  return (
    <div>
        <button onClick={handleClick}>Lessons</button>
        {isShown && (
            <div>
                <h1>Lessons</h1>
            </div>
        )}
    </div>
  )
}

export default Lessons;
