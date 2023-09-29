import './App.css';
import Button from './components/button'
import Counter from './components/counter'
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const clickHandle = () => {
    setNumClicks(numClicks + 1);
  };

  const countReset = () => {
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='FreeCodeCamp Logo'/>
      </div>  
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        
        <Button 
        text='Click'
        isClickButton={true}
        clickHandler={clickHandle}
        />

        <Button 
        text='Reset'
        isClickButton={false}
        clickHandler={countReset}
        />
      </div>
    </div>
  );
}

export default App;
