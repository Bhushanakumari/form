import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/gi, "");
    if (value.length >= 4) setName(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const re = /\S+@\S+\.\S+/;
    if (re.test(value)) setEmail(value);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value > 18) setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && age) {
      alert(`Voila, you did it ${name}! Your age is ${age} and your email is ${email}.`);
    } else {
      if (!name) alert("Please enter a valid name.");
      if (!email) alert("Please enter a valid email address.");
      if (!age) alert("Please enter a valid age (must be greater than 18).");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} pattern="[A-Za-z]{4,}" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} min="19" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
