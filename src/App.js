import React, {useState} from 'react';
import './App.css';
import AppContext from './theme-context';
import Header from './Header'
import Text from './Text'
import Button from './Button'

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
            <Button/>
          </AppContext.Provider>

      </>
  );
}

export default App;

