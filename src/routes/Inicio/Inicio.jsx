import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <Navbar />
      <h2 className="titulo">Centro Medico Homeopatico</h2>
      <section>
        <a
          href="https://api.whatsapp.com/send?phone=3137675461"
          className="btn-wsp"
          target="_blank"
        >
          <img
            className="icon-whatsapp"
            src="./assets/imagenes/whatsapp.png"
            alt=""
            width="40px"
            loading="lazy"
          />
        </a>
        <header className="container">
          
        </header>
      </section>

      <section className="contenedor sobre-nosotros" id="about-us">
        <h2 className="titulo">Especialidad</h2>
        <div className="contenedor-sobre-nosotros1">
          <img
            src="./assets/imagenes/imagen2.jpg"
            alt=""
            className="imagen-about-us1"
            loading="lazy"
          />
          <div className="contenido-textos1">
            <h3 className="contenido-textos1-h3">
              <span>!</span> Homeopatía.
            </h3>
            <p>
              Es un método terapéutico que utiliza sustancias naturales para
              aliviar los síntomas. Deriva de las palabras griegas homeo, que
              significa "similar", y pathos, que significa "sufrimiento" (como
              la patología de una enfermedad). La homeopatía opera según el
              principio de "lo similar cura lo similar" que se ha utilizado
              empíricamente durante más de 200 años y continúa confirmándose en
              la investigación farmacológica y los estudios clínicos. Lo que
              esto significa es que una persona que sufre síntomas puede ser
              tratada con microdosis de una sustancia capaz de producir síntomas
              similares en una persona sana. Se dice que los medicamentos
              homeopáticos estimulan las reacciones fisiológicas del cuerpo que
              restauran la salud. Esto se logra con un riesgo muy bajo de
              efectos secundarios debido al uso de microdosis.
            </p>
          </div>
        </div>

        <div className="contenedor-sobre-nosotros2">
          <div className="contenido-textos2">
            <h3 className="contenido-textos2-h3">
              <span>!</span> Beneficios de la Homeopatía.
            </h3>
            <p>
              Una elección natural. Los ingredientes activos de los
              medicamentos homeopáticos están hechos de extractos diluidos de
              plantas, animales, minerales u otras sustancias crudas que se
              encuentran en la naturaleza.
              Para uso diario. Al igual que otros medicamentos de venta
              libre (OTC), los medicamentos homeopáticos se pueden usar para
              aliviar los síntomas de una amplia gama de afecciones de salud
              comunes, como alergias, tos, resfriados, gripe, estrés, dolor de
              artritis, dolor muscular y dentición.
              Seguro y confiable.   La homeopatía se ha utilizado durante
              más de 200 años, construyendo un notable historial de seguridad y
              generando una gran cantidad de conocimientos. Los medicamentos
              homeopáticos no enmascaran los síntomas, no están contraindicados
              con afecciones preexistentes y no se sabe que interactúen con
              otros medicamentos o suplementos, lo que los convierte en una de
              las opciones más seguras para el autotratamiento.
              Normas rigurosas.     Los medicamentos homeopáticos se fabrican
              de acuerdo con los más altos estándares, cumpliendo con las
              regulaciones de la Administración de Drogas y Alimentos de los EE.
              UU. y la Farmacopea Homeopática de los Estados Unidos (HPUS).
              Más opciones y preferencias. Los medicamentos homeopáticos
              están disponibles en una variedad de formas de dosificación, como
              geles, ungüentos, cremas, jarabes, gotas para los ojos, tabletas y
              supositorios.
            </p>
          </div>
          <img
            src="./assets/imagenes/portafolio8.jpg"
            alt=""
            className="imagen-about-us2"
            loading="lazy"
          />
        </div>

        <div className="contenedor-sobre-nosotros1">
          <div className="contenido-textos1">
            <h3 className="contenido-textos1-h3">
              <span>!</span> Consulta Medica Homeopatica.
            </h3>
            <p>
            La homeopatía es un modelo médico clínico terapéutico que utiliza
              sustancias obtenidas de vegetales, animales y minerales
              principalmente, en concentraciones muy pequeñas disueltas en agua
              y alcohol. Los síntomas muestran el esfuerzo curativo del cuerpo,
              en este sentido el medicamento homeopático respeta al organismo y
              se encarga de modular o regular los padecimientos en lugar de
              disfrazarlos.
            </p>
        <img src="./assets/imagenes/portafolio1.jpg" alt="" loading="lazy"/>
          </div>
        </div>

      </section>
      <br />
      <br />
      <br />
      
    </>
  );
};

export default Inicio;
