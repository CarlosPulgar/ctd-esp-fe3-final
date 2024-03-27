import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { routes } from './utils/routes'
import { useContexGlobal } from '../Context/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContexGlobal()

  return (
    <nav className={!state.theme && 'dark'}>
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      <button className='buttonTheme' onClick={() => dispatch({type: 'TOGGLE_THEME', })}> {state.theme ? ' Change Theme 🌘'  : 'Change Theme ☀️' }</button>
    </nav>
  )
}

export default Navbar