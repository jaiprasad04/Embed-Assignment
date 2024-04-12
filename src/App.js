import { useState } from 'react';

import ForYou from './components/ForYou';
import TryThese from './components/TryThese';
import Featured from './components/Featured';
import Categories from './components/Categories';
import SideBar from './components/SideBar';
import SearchAndToggle from './components/SearchAndToggle';
import ToggleButton from './components/ToggleButton';
import TrySaying from './components/TrySaying';

import './App.css';

const App = () => {
  const [toggleButton, setToggleButton] = useState(false)

  const hideSideBar = () => {
      setToggleButton(true)
  }

  const showSideBar = () => {
    setToggleButton(false)
  }

  return (
    <div className="character-ai-app">
      <div className="side-bar-container2">
        <SideBar toggleButton={toggleButton} hideSideBar={hideSideBar}/>
      </div>
      <div className="toggle-button-container2">
        <ToggleButton toggleButton={toggleButton} showSideBar={showSideBar} />
      </div>
      <div className="app-container">
        <SearchAndToggle />
        <ForYou />
        <TryThese />
        <Featured />
        <Categories />
        <TrySaying />
      </div>
    </div>
    
  );
}

export default App;
