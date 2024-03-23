import React from "react";


const Form = ({handleclick}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        
        <input type="text" placeholder="Nombre completo" />
        <br />
        <input role="email" type="email" placeholder="Email" />
        <br />
        <button onClick={handleclick}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
