import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useContexGlobal } from "../Context/global.context";
import axios from "axios";



const Card = ({item}) => {
  const location = useLocation()
  const {state, dispatch} = useContexGlobal()
  const {infoDoc} = state;
   

  return (
    <div className="card">
      <Link to= {'/detail/' + item.id}>
        <img className="imagenDoc" src="/images/doctor.jpg" alt=""/>
      </Link>
      <h3>{item.name}</h3>
      <h2>{item.username}</h2> 
      { location.pathname == '/favs' &&
          <button onClick={() => dispatch({type: 'DELETE_FAV', payload: item.id})}>
          delete fav
        </button>}     

     
    </div>
  );
};

export default Card;
