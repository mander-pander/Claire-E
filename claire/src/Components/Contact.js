import {useState} from 'react';

const Contact = () => {
    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown(current => !current);
    };


  return (
    <div>
        <button onClick={handleClick}>Contact Me</button>
        {isShown && (
            <div>
                <h1>Contact Me</h1>
            </div>
        )}
    </div>
  )
}

export default Contact;
