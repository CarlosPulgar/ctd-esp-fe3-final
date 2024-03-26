import React from "react";
import Card from "../Components/Card";
import { useContexGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const { state } = useContexGlobal()
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => <Card  key={fav.id} item={fav}/>)}        
      </div>
    </>
  );
};

export default Favs;
