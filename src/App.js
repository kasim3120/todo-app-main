import React from 'react';
import './sass/App.scss';
import { useSelector } from ' react-redux'
import { selectDarkMode } from './features/counter/themeSlice';

import Todos from './components/Todos';


const App = () => {
const darkMode = useSelector(selectDarkMode)

  return (
    
      <div className={`app ${darkMode ? 'whiteBg' : ''}`} >
        <div className="header">
        </div>
        <Todos />
      </div>
    
  )
}

export default App;
