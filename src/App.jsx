import React from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept/CoreConcept";
import TabButton from "./Components/TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>CoreConcepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concepItem) => (
              <CoreConcept {...concepItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <section id="examples">
            <menu>
              <TabButton
                handleClick={() => {
                  handleClick("components");
                }}
              >
                Components
              </TabButton>
              <br />
              <TabButton
                handleClick={() => {
                  handleClick("jsx");
                }}
              >
                JSX
              </TabButton>
              <br />
              <TabButton
                handleClick={() => {
                  handleClick("props");
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
            </menu>
            {selectedTopic === undefined ? (
              <p> Please select a topic.</p>
            ) : (
              <div>
                <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                </div>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
