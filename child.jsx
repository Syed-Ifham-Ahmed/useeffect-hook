import React, { useEffect, useState } from "react";

function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const handler = () => {
      setAge((prev) => prev + 1);
    };

    document.addEventListener("click", handler);

    console.log("inside Effect");

    return () => {
      document.removeEventListener("click", handler);

      console.log("cleanup");
    };
  }, [age]);
  // useEffect(() => {
  //   console.log("Render");
  // });

  // useEffect(() => {
  //   console.log("HI");

  //   return () => {
  //     console.log("bye");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(`My name is ${name} and I am ${age} years old`);
  // }, [name, age]);

  // useEffect(() => {
  //   document.title = name;

  //   const nameTimeout = setTimeout(() => {
  //     console.log(name);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(nameTimeout);
  //   };
  // }, [name]);

  //   console.log("child");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button>+</button>

      {age}
      <button onClick={() => setAge((prev) => prev - 1)}>-</button>
      <p>
        My name is {name} and i m {age} years old
      </p>
    </>
  );
}

export default Child;
