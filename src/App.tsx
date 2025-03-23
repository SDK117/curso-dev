import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Función para obtener datos desde una API externa
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }

      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  /**
   * useEffect se usa para manejar efectos secundarios en React, como:
   * - Llamadas a APIs externas (fetch, axios, etc.)
   * - Operaciones asíncronas (como peticiones HTTP)
   * - Responder a cambios en props o estado
   * - Integración con contexto global
   * - Suscripción a eventos y limpieza de efectos al desmontar el componente
   */

  //asycn con entidades externas
  useEffect(() => {
    // 1- cuando se monta el componente
    // 2- cada vez que se modifique uno de los valores de state
    fetchData();
  }, []);

  // Mostrar mensaje de carga mientras se obtiene la información
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Mostrar mensaje de error en caso de fallo
  if (error) {
    return <div>Error :{error}</div>;
  }

  return (
    <>
      {/* Muestra los datos obtenidos de la API en formato JSON */}
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
