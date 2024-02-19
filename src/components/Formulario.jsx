import Form from "react-bootstrap/Form";

function Formulario({ handleCategoriaChange, handlePaisChange }) {
  const handleCategoria = (e) => {
    handleCategoriaChange(e.target.value);
  };

  const handlePais = (e) => {
    handlePaisChange(e.target.value);
  };

  return (
    <div className="d-flex mb-3">
      <Form.Select className="mx-2 ms-5" aria-label="Default select example" onChange={handleCategoria}>
        <option className="text-center">Elegir categoria</option>
        <option value="business">Negocios</option>
        <option value="sports">Deportes</option>
        <option value="education">Educacion</option>
      </Form.Select>

      <Form.Select className="mx-2 me-5" aria-label="Default select example" onChange={handlePais}>
        <option className="text-center">Elegir pais</option>
        <option value="ar">Argentina</option>
        <option value="us">Estados Unidos</option>
      </Form.Select>
    </div>
  );
}

export default Formulario;
