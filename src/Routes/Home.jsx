import React from 'react'
import Card from '../Components/Card'
import {useEffect, useState } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [doc, setDoc ] = useState([])
  const url ='https://jsonplaceholder.typicode.com/users'
  

  useEffect(() => {
    axios(url)
    .then(res => setDoc(res.data)) 
}, [])
console.log(doc);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {doc.map((item) => <Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home