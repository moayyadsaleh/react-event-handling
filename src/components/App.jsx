import React, { useState } from "react";
import "../styles.css";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const inputName = event.target.elements.name.value;
    setName(inputName);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name" // Added name attribute to the input
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
