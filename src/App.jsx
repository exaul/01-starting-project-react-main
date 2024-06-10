<<<<<<< HEAD
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

=======
import Header from "./Components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data";

function App() {
>>>>>>> b987b0121f4fb321b4e4b10d05b7d5105d19d9a4
  return (
    <div>
      <Header />

      <main>
        <h2>Time to get Started!</h2>

        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
<<<<<<< HEAD
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
=======
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
>>>>>>> b987b0121f4fb321b4e4b10d05b7d5105d19d9a4
      </main>
    </div>
  );
}

export default App;
