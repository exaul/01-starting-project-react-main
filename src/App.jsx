import React from "react";
import ComponentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const mydata = ["Exaul", "Falcones", "22", "software developer"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function Lista(props) {
  return (
    <div>
      <p>Nombre: {props.nombre}</p>
      <p>Apellido: {props.apellido}</p>
      <p>Edad: {props.edad}</p>
      <p>Título: {props.titulo}</p>
    </div>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        {/* <Lista nombre={mydata[0]} apellido={mydata[1]} edad={mydata[2]} titulo= {mydata[3]}></Lista> */}
        <section id="core-concepts">
          <h2>CoreConcepts</h2>
          <ul>
            <CoreConcept
              image={ComponentImg}
              title="components"
              description="Hola que tal como estas"
            />
            <CoreConcept
              image={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
