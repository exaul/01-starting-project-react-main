import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./Components/TabButton/Tabbutton.jsx";

import { CORE_CONCEPTS } from "./data";
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
        <h2>Time to get Started!</h2>

        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton
              onClick={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>

          {selectedTopic === undefined ? (
            <h2>Please, select a topic.</h2>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;