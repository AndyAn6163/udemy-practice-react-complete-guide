import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  /*
    1. only call hooks inside of component functions
    2. only call hooks on the top level
  */
  /*
    use array destructuring
    1. first element : current state value
    2. second element : state updating function
  */
  /*
    64
    state 有變化只會影響到 Examples 這個 Component Function 
    其他 Component Function 不會被影響而再次被執行渲染
  */
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        /* 
          for the built-in element we use string "menu", "div"
          for the custom component we use curly bracket {Section}
          If the first letter of a name is capitalized, then JSX knows it’s a component instance; 
          if not, then it’s an HTML element.
          so you can map prop value to a capitalized variable and JSX know it's a component (const ButtonsConstianer = buttonsContainer)
          or you can directly use Capitalized prop
          ButtonsContainer="menu"
        */
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
