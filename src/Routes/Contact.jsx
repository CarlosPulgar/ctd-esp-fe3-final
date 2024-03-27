import React from 'react'
import Form from '../Components/Form'
import { useContexGlobal } from '../Context/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {state} = useContexGlobal()
  
  return (
    <div className='containerForm'>
      <div className={!state.theme && 'dark'}>
        
        <h2 className='contact'>Want to know more?</h2>
        <Form/>
        <p className='contact'>Send us your questions and we will contact you</p>      
      </div>
    </div>
    
  )
}

export default Contact