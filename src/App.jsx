import React from 'react'
import '../src/Assets-Home/Home-Css/home.css'
import Import from './Import'
import { useState } from 'react';
import { AppContext } from './Context/AppContext';


function App() {
  const [bahasa, setBahasa] = useState('id');
  return (
    <>
         <AppContext.Provider
        value={{
          lang: bahasa,
          onchangebahasa: setBahasa
        }}>
<Import/>
    </AppContext.Provider>  
    </>
  )
}

export default App
