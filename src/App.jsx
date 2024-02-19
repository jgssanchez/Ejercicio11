import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";
import Noticia from "./components/Noticia";



function App() {
  const [categoria, setCategoria] = useState("sports");
  const [noticias, setNoticias] = useState([]);
  const [pais, setPais] = useState("ar");
  const [loading, setLoading] = useState(true); 

  const getNoticias = async () => {
    try {
      setLoading(true); 
      const resp = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_38241dc69643b025867d824d9a60e7078f008&q=categories&country=${pais}&category=${categoria}`
      );
      const data = await resp.json();
      setNoticias(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  const handleCategoriaChange = (selectedCategoria) => {
    setCategoria(selectedCategoria);
  };

  const handlePaisChange = (selectedPais) => {
    setPais(selectedPais);
  };

  useEffect(() => {
    getNoticias();
  }, [categoria]);

  return (
    <>
      <h1 className="text-center ">App de noticias</h1>
      <hr />

      <Formulario
        handleCategoriaChange={handleCategoriaChange}
        handlePaisChange={handlePaisChange}
      />
      {loading ? ( 
        
          <h1 className="text-center">Cargando...</h1>

        
      ) : (
        <ListaNoticias noticias={noticias} />
      )}
    </>
  );
}

export default App;
