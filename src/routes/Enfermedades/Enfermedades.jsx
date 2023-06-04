import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Enfermedades.css";

function App() {
  const [info, setInfo] = useState("");
  const [areButtonsVisible, setAreButtonsVisible] = useState(true);

  const handleButtonClick = (newInfo) => {
    setInfo(newInfo);
    setAreButtonsVisible(false);
  };

  const handleCloseClick = () => {
    setInfo("");
    setAreButtonsVisible(true);
  };

  return (
    <>
      <Navbar />
      <h2 className="titulo">Enfermedades</h2>
      <div className="contenedor-enfermedades">
        {areButtonsVisible && (
          <div className="contenedor-botones">
            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <img
                      src="./assets/imagenes/hepatitis.jpg"
                      alt="Icono de Hepatitis A"
                    />
                    <p className="descripcion-enfermedad">
                    La hepatitis A es una de varias infecciones virales que afectan el hígado. Provoca una inflamación aguda del hígado, que es lo que significa “hepatitis”. Los síntomas pueden durar varios meses, pero finalmente desaparecen sin tratamiento. La transmisión es principalmente por vía fecal-oral.
                    </p>
                  </>
                )
              }
            >
              Hepatitis A
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <img
                      src="./assets/imagenes/artritis.jpg"
                      alt="Icono de Arthritis"
                    />
                    <p className="descripcion-enfermedad">
                      La artritis es un trastorno común que afecta las articulaciones.
                      Puede causar dolor e inflamación, lo que dificulta la
                      moverse o mantenerse activo. Hay muchos tipos de artritis.
                      Cada forma causa diferentes síntomas y puede necesitar diferentes
                      tratos. Si bien la artritis generalmente afecta a los adultos mayores,
                      puede desarrollarse en hombres, mujeres y niños de cualquier edad. 
                    </p>
                  </>
                )
              }
            >
              Arthritis
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <img
                      src="./assets/imagenes/gripe.jpg"
                      alt="Icono de Gripe"
                    />
                    <p className="descripcion-enfermedad">
                      La gripe es una enfermedad común que se contrae a partir de la gripe
                      virus. Está en riesgo de sufrir complicaciones graves si
                      tiene una condición de salud subyacente o está embarazada.
                    </p>
                  </>
                )
              }
            >
              Gripe
            </button>
          </div>
        )}
        {info && (
          <div>
            {info}
            <button className="cerrar" onClick={handleCloseClick}>Cerrar</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
