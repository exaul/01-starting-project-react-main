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
function Lista() {
  return (
    <div>
      <p>Nombre : {mydata[0]}</p>
      <p>Apellido : {mydata[1]}</p>
      <p>Edad : {mydata[2]}</p>
      <p>Titulo : {mydata[3]}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <Lista />
      </main>
    </div>
  );
}

export default App;
