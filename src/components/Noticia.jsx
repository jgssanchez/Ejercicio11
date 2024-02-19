// Noticia.jsx
import React from "react";
import { Card } from "react-bootstrap";
import Titulo from "./Titulo";

function Noticia({ titulo, contenido }) {
  return (
    <Card className=" d-flex w-100 mh-50 mt-3 p-2">
      <Titulo titulo={titulo} style={{ fontSize: "16px", }} /> 
      <hr />
      <Card.Body>
        <Card.Text className="card-text" style={{ maxHeight: "100px", overflow: "hidden" }}>
          {contenido}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Noticia;
