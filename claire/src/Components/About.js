import {useState} from 'react';

const About = () => {
    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown(current => !current);
    };


  return (
    <div>
        <button onClick={handleClick}>About</button>
        {isShown && (
            <div>
                <h1>About</h1>
            </div>
        )}
    </div>
  )
}

export default About;
