// Example of the useEffect Hook

import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello, React!</h1>;
}
