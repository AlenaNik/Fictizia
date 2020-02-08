import React, {useState} from 'react';
import './App.css';
import AppContext from './theme-context';
import Header from './Header'

function App() {
 
  const [language, setLanguage] = useState('ru')


  return (
      <>
          <AppContext.Provider value={{
            language: language,
            changeLanguage: (language) => setLanguage(language)
          }}>
            <Header/>

          </AppContext.Provider>

      </>
  );
}

export default App;

