import React, {useState} from 'react';
import './App.css';
import AppContext from './theme-context';
import Header from './Header'
import Text from './Text'

function App() {
 
  const [language, setLanguage] = useState('es')


  return (
      <>
          <AppContext.Provider value={{
            language: language,
            changeLanguage: (language) => setLanguage(language)
          }}>
            <Header/>
            <Text/>
          </AppContext.Provider>

      </>
  );
}

export default App;

