import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const [dentist, setDentist] = useState({})
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  console.log(url);
  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
}, [])
console.log(dentist);
  return (
    <>
      <h1>Detail Dentist id </h1>
      <h3 className='infoDentist'>Nombre dentista: {dentist.name}</h3>
      <h3 className='infoDentist'>Correo electronico : {dentist.email}</h3>
      <h3 className='infoDentist'>Telefono: {dentist.phone}</h3>
      <h3 className='infoDentist'>Pagina web: {dentist.website}</h3>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail