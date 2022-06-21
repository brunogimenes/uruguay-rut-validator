import { useState } from "react";
import checkRut from "uruguay-rut-validator";
const App = () => {
  const [rut, setRut] = useState("");
  const validRut = checkRut(rut);
  return (
    <div className="p-10 mx-auto w-full max-w-4xl">
      <h1 className="text-lg p-2 mx-auto font-bold">
        🇺🇾 Uruguay RUT Validator
      </h1>
      <input
        className="bg-gray-200 p-1 rounded-md w-full"
        placeholder="Enter RUT (Numbers only)"
        type="text"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
      />
      <div className="p-2">{validRut ? "VALID RUT" : "NOT VALID RUT"}</div>
    </div>
  );
};

export default App;
