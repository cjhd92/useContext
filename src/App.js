
import './App.css';
import { AppRouter } from '../src/AppRouter';
import { UserContext } from './UserContext';
import React, { useState } from 'react'


function App() {

  const [user, setUser] = useState({})



  return (

    <>
      <UserContext.Provider value={{
        user,
        setUser
      }
      }>
        <AppRouter />
      </UserContext.Provider>


    </>
  );
}

export default App;
