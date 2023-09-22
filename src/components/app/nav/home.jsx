import React from "react";
import Accordion from "../home/preguntas";



const Home = ()=>{

    const items = [
        {
          title: 'Panel 1',
          content: 'Este es el contenido del panel 1.',
        },
        {
          title: 'Panel 2',
          content: 'Este es el contenido del panel 2.',
        },
    ];

    return(
        <div className="home"> 
            <img src="../../../../public/gran-coleccion-libros-antiguos-estantes-madera-generados-ia.jpg" alt="" />
            <div className="titulo">
                <p>Campus library</p>
            </div>
            <div className="contedino">
                <h1>¿Qué puede hacer Campus library?</h1>

                <p>Campus library puede hacer mucho más que ofrecer libros y artículos electrónicos. También puede proporcionarte una serie de servicios y herramientas que te ayudarán a aprender, investigar y crear.</p>

                <ul>
                <li>Acceso a recursos de todo el mundo</li>
                <li>Herramientas de investigación</li>
                <li>Servicios de referencia</li>
                <li>Herramientas de colaboración</li>
                </ul>

                <p>Para aprovechar al máximo Campus library, es importante que la explores y aprendas a usar sus servicios y herramientas.</p>

                <p>Visita la página web de Campus library y explora sus recursos. Lee la documentación de Campus library para aprender cómo usar sus servicios y herramientas. No dudes en pedir ayuda a los bibliotecarios.</p>

                <p>Campus library es una herramienta valiosa que puede ayudarte a aprender, investigar y crear. Al aprovechar al máximo sus servicios y herramientas, podrás sacarle el máximo partido.</p>
                <Accordion items={items} />
            </div>
        </div>
    )
}

export default Home;