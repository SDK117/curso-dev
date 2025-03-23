import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [name, setName] = useState("Ulises");
  const changeName = () => {
    //setName('Jesus')
    setName((prevName) => (prevName === "Ulises" ? "Jesus" : "Ulises"));
  };

  const llamadaAPi = () => {
    console.log("llamada los daos");
  };

  useEffect(() => {
    console.log("se monto el componente");
    llamadaAPi();
  }, [name]);

  return (
    <>
      <p>Hola {name}</p>
      <Button label="Cambiar nombre" parentMethod={changeName} />
    </>
  );
}

export default App;
