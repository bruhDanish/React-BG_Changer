import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-200 px-3 py-2 rounded-lg">
            <button
              className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor('red')}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "Green" }}
              onClick={() => setColor('green')}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "Blue" }}
              onClick={() => setColor('blue')}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
