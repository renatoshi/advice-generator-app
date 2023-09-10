import { useState } from "react";
import { Advice } from "./components/Advice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-full bg-darkBlue flex items-center justify-center p-4">
        <Advice />
      </div>
    </>
  );
}

export default App;
