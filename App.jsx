import React, { useEffect, useState } from "react";
import Child from "./child";

function App() {
  const [isShow, setIsShow] = useState(true);

  function toggleHanlder() {
    setIsShow((prev) => !prev);
  }

  const visible = isShow ? <Child /> : null;
  return (
    <>
      <button onClick={toggleHanlder}>Toggle</button>
      <br />
      <br />
      {visible}
    </>
  );
}

export default App;
