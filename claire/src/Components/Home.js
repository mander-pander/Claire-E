import {useState} from 'react';

const Home = () => {
    const [isShown, setIsShown] = useState(false);

    function handleClick() {
        setIsShown(current => !current);
    };


  return (
    <div>
        <button onClick={handleClick}>Home</button>
        {isShown && (
            <div>
                <h1>Home</h1>
            </div>
        )}
    </div>
  )
}

export default Home;
