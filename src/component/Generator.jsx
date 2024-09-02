import { useEffect, useState } from 'react';

function Generator() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchData(){
    setIsLoading(true);
    setError(null);

    fetch(`https://api.boostr.cl/passwords/generate.json`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error.message}</p>;
  }

  return (
    <>
      {data && (
        <div>
          <p>Contraseña generada: {data}</p>
          <button onClick={fetchData}>Generar Nueva Contraseña</button>
        </div>
      )}
    </>
  );
}

export default Generator;