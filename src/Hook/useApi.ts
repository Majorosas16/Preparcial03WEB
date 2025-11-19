//Este es el hook para traer el API
import { useState, useEffect } from "react";

const useApi = () => {
  const [RickMorty, setBooksLocal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((datos) => {
        // Datos recibidos del API (.results para obtener el array de personajes)
        setBooksLocal(datos.results);
        
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { RickMorty, loading };
};

export default useApi;
