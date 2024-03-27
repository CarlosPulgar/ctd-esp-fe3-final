import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContexGlobal } from '../Context/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  
  const {state, dispatch} = useContexGlobal()
  const {infoDoc} = state
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  
  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_INFO', payload: res.data}))
}, [])

  return (
    < >
      <div className='tableInfo'>
        <h1>Detail Dentist id </h1>
        <img className="imagenDoc imgInfo" src="/images/doctor.jpg" alt=""/>
        <table >
          <thead>
            <tr>
              <th>Nombre dentista:</th>
              <th>Correo electronico:</th>
              <th >Telefono:</th>
              <th >Pagina web:</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>            
              <td>{infoDoc.name}</td>
              <td>{infoDoc.email}</td>
              <td>{infoDoc.phone}</td>
              <td>{infoDoc.website}</td>                          
            </tr> 
          </tbody>              
        </table>
        <button onClick={() => dispatch({type: 'ADD_FAV', payload: infoDoc })} className="favButton">Add fav ❤️</button> 
      </div>
      
      
    </>
  )
}

export default Detail