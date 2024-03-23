import { createContext, useState } from "react";

export const initialState = {
  theme: "",
  data: []
}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, setState] = useState()
  console.log(state);

  const url ='https://jsonplaceholder.typicode.com/users'
  console.log(url);
  useEffect(() => {
    axios(url)
    .then(res => {
        // console.log(res.data.recipes)
        setState
    }) 
}, [])

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
