import React from "react";
import ComponentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept/CoreConcept";
import TabButton from "./Components/TabButton/TabButton";

function App() {
  function handleClick(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>CoreConcepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2></h2>
          <section id="examples">
            <TabButton
              handleClick={() => {
                handleClick("Components");
              }}
            >
              Components
            </TabButton>
            <br />
            <TabButton
              handleClick={() => {
                handleClick("JSX");
              }}
            >
              JSX
            </TabButton>
            <br />
            <TabButton
              handleClick={() => {
                handleClick("Props");
              }}
            >
              Props
            </TabButton>
            <br />
            <TabButton
              handleClick={() => {
                handleClick("state");
              }}
            >
              state
            </TabButton>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
