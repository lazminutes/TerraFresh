import React from 'react'
import './assets/css/home.css'
import Import from './Import'
import { useState } from 'react';
import { AppContext } from './context/AppContext';
import { APIContextProvider } from './context/APIContext';


function App() {
  const [bahasa, setBahasa] = useState('id');
  return (
    <>
      <APIContextProvider>
        <AppContext.Provider
          value={{
            lang: bahasa,
            onchangebahasa: setBahasa
          }}>
          <Import />
        </AppContext.Provider>
      </APIContextProvider>
    </>
  )
}

export default App
