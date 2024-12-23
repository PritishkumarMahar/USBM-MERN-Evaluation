//Difference Between Controlled and Uncontrolled Components in React

/*
Controlled components are managed by React's state, where the input's value is bound to a state variable and updated through event handlers. They are ideal for cases where you need to validate or manipulate input data dynamically. In contrast, uncontrolled components rely on the DOM to manage their data. You use (ref) to access the input value, making them suitable for simpler use cases where React state management is unnecessary.
*/

// controlled Component
import { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

//Uncontrolled Component
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
