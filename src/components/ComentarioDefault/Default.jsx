import './Default.css'

function ComentarioDefault() {

  return (
    <div className="comentario comentario__default">
      <img className="img__avatar" src="../../img/avatar.png"></img>
      <p>Anónimo</p>
      <p className="comentario__default comentario__texto">
        Deja tu comentario...
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </p>
    </div>
  );
};

export default ComentarioDefault;
