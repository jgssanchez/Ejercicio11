import Noticia from "./Noticia";

function ListaNoticias({ noticias }) {
  return (
    <div className="lista-noticias">
      
      {noticias.length > 0 ?  noticias.map((noticia) => (
        <Noticia titulo={noticia.title} contenido={noticia.description}/>
        
      ))
      :
      (<h1 className="text-center">No hay noticias disponibles</h1>)
      }
    </div>
  );
}
export default ListaNoticias;