/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyContext from './myContext';

function MyState({children}) {
    const[loading,setloading]=useState(false);
  return (
    <MyContext.Provider value={{loading,setLoadingState : (value) => setloading(value) }}>
       {children}
    </MyContext.Provider>
  )
}

export default MyState