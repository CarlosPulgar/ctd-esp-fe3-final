import { createContext, useEffect, useReducer, useContext } from "react";
import { reducer } from '../Components/utils/reducer';
import axios from "axios";

export const ContextGlobal = createContext();

  const initialState = {
    docList: [],
    infoDoc:{},
    favs: JSON.parse(localStorage.getItem('favs')) || []
  
}

const ContextProvider = ({ children }) => {
  
    const [state, dispatch] = useReducer(reducer, initialState)

    const url ='https://jsonplaceholder.typicode.com/users'
    console.log(state);
    
    useEffect(() => {
        axios(url)
        .then(res => { dispatch({type: 'GET_LIST', payload: res.data})}) 
    }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
    },[state.favs])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
    );
};

export default ContextProvider

export const useContexGlobal = () => useContext(ContextGlobal)
