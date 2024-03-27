import React from 'react'
import Card from '../Components/Card'
import { useContexGlobal } from '../Context/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContexGlobal()
  

  return (
    <main className={!state.theme && 'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.docList.map((item) => <Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home