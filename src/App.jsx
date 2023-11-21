import { useState } from "react";
import "./App.css";
import Comentario from "./components/Comentario/Comentario";
import ComentarioDefault from "./components/ComentarioDefault/Default"

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">LECHUGA VIDEOS</header>
      <container className="container">
        <main className="container__main">
          <p className="titulo__video">Ser o no ser una lechuga</p>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/SU8VAhxpsKI?si=mXu6KBCM564Rk5UO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="titulo__likes">
            <button onClick={() => {
              setCount(e => e +1);
            }} className="btn__likes">
            <img src="../img/heart.png" className="img__corazon"></img>
            </button>
            Likes: {count}
          </p>
        </main>
        <section className="container__coments">
          <p className="titulo__comentarios">Comentarios</p>
          <Comentario />
          <ComentarioDefault />
        </section>
      </container>
    </div>
  );
};

export default App;
