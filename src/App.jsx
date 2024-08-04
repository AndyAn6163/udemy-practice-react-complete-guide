import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  console.log("APP COMPONENT EXECUTING");

  /*
  只能 return one value，如果不想要多一個  unnecessary div element 去 wrapper 同級 element，可以使用 Fragment
  import { Fragment } from "react";  ... <Fragment>...</Fragment>
  或者直接使用 <> </>
  */

  return (
    <>
      <header>
        <h1>Hello World!</h1>
      </header>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
