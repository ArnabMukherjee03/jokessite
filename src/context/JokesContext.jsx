import {createContext, useState } from "react";
import useData from "../hooks/useData";

export const jokeContext = createContext();

// eslint-disable-next-line react/prop-types
const JokeProvider = ({children})=>{
   const [token,setToken] = useState(localStorage.getItem('category'));
   

   const getToken = (token)=>{
    setToken(token);
   }

   const { data } = useData(`/random?category=${token}`);
  
    return <jokeContext.Provider value={{getToken,data,token}}>
        {children}
    </jokeContext.Provider>
}

export default JokeProvider;