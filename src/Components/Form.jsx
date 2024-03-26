import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState(
    {
      name:'',
      email:''
    }
  )

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  
  const handleclick = (e)=> {
    e.preventDefault()
    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    if(regex.test(user.email) && user.name.length > 5 ){
      setShow(true)
      setErr(false)
    }else{
      setErr(true)
    }
  }

  return (
    <div>
      {!show && <form onSubmit={handleclick}>
        <label >Nombre completo</label>
        <input type="text" onChange={({target}) => setUser({...user, name:target.value })} placeholder="Ingrese su nombre"   />
        {console.log(user)}
        <br />
        <label>Email </label>
        <input role="email" type="email" onChange={({target}) => setUser({...user, email:target.value })} placeholder="Ingrese su email" />
        <br />
        <button >Enviar</button>
      </form>}
      {show && <h4 className="contact">Gracias {user.name}, te contactaremos cuando antes via email </h4> }
      {console.log(user.name)}
      {console.log(user.email)}
      {err && <h4 className="contact"> Por favor verifique su información nuevamente</h4>}
    </div>
  );
};

export default Form;
