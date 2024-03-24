import React from "react";
import { Link } from "react-router-dom";


const Card = ({ item }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to= {'/detail/' + item.id}>
        <img className="imagenDoc" src="/images/doctor.jpg" alt=""/>
      </Link>
      <h3>{item.name}</h3>
      <h2>{item.username}</h2>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
