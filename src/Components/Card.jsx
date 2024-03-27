import { Link, useLocation, useParams } from "react-router-dom";
import { useContexGlobal } from "../Context/global.context";


const Card = ({item}) => {
  const location = useLocation()
  const {state, dispatch} = useContexGlobal()
  
   

  return (
    <div className="card">
      <Link to= {'/detail/' + item.id}>
       
        <img  className="imagenDoc" src="/images/doctor.jpg" alt=""/>
              
      </Link>
      <h3>{item.name}</h3>
      <h2>{item.username}</h2> 
      { location.pathname == '/favs' &&
          <button className="deleteButtom" onClick={() => dispatch({type: 'DELETE_FAV', payload: item.id})}>
          delete fav
        </button>}     

     
    </div>
  );
};

export default Card;
