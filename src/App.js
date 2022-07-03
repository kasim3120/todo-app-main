import React from 'react';
import './sass/App.scss';
import { useSelector } from 'react-redux'
import { selectDarkMode } from './features/Slices/themeSlice';

import Todos from './components/Todos';


const App = () => {
const darkMode = useSelector(selectDarkMode)

  return (
      <div className={`app ${!darkMode ? 'whiteBg' : ''}`} >
        <div className={`header ${!darkMode ? 'whiteBg' : ''}`} />
        <Todos />
      </div>
  )
}

export default App;
