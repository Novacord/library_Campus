import React from "react";
import ListaLibros from "./libros/listaLibros";

const libros = [
    {
        "titulo": "El señor de los anillos",
        "genero": "Fantasía",
        "editorial": "Minotauro",
        "autor": "J.R.R. Tolkien",
    },
    {
        "titulo": "Harry Potter y la piedra filosofal",
        "genero": "Fantasía",
        "editorial": "Salamandra",
        "autor": "J.K. Rowling",
    },
    {
        "titulo": "Cien años de soledad",
        "genero": "Novela",
        "editorial": "Círculo de Lectores",
        "autor": "Gabriel García Márquez",
    },
    {
        "titulo": "La metamorfosis",
        "genero": "Cuento",
        "editorial": "Alfaguara",
        "autor": "Franz Kafka",
    },
    {
        "titulo": "El Quijote",
        "genero": "Novela",
        "editorial": "Ediciones Cátedra",
        "autor": "Miguel de Cervantes Saavedra",
    },
    {
        "titulo": "El código da Vinci",
        "genero": "Thriller",
        "editorial": "Planeta",
        "autor": "Dan Brown",
    },
    {
        "titulo": "La sombra del viento",
        "genero": "Novela histórica",
        "editorial": "Booket",
        "autor": "Carlos Ruiz Zafón",
    },
    {
        "titulo": "Los pilares de la Tierra",
        "genero": "Novela histórica",
        "editorial": "Planeta",
        "autor": "Ken Follett",
    },
    {
        "titulo": "El juego de Ender",
        "genero": "Ciencia ficción",
        "editorial": "Ediciones B",
        "autor": "Orson Scott Card",
    },
    {
        "titulo": "La historia interminable",
        "genero": "Fantasía",
        "editorial": "Alfaguara",
        "autor": "Michael Ende",
    },
    {
        "titulo": "La vida de Pi",
        "genero": "Novela",
        "editorial": "Anagrama",
        "autor": "Yann Martel",
    },
    {
        "titulo": "1984",
        "genero": "Novela distópica",
        "editorial": "DeBolsillo",
        "autor": "George Orwell",
    },
    {
        "titulo": "El retrato de Dorian Gray",
        "genero": "Novela gótica",
        "editorial": "Alianza Editorial",
        "autor": "Oscar Wilde",
    },
    {
        "titulo": "El principito",
        "genero": "Novela",
        "editorial": "Ediciones Salamandra",
        "autor": "Antoine de Saint-Exupéry",
    },
    {
        "titulo": "El código da Vinci",
        "genero": "Thriller",
        "editorial": "Planeta",
        "autor": "Dan Brown",
    },
    {
        "titulo": "La sombra del viento",
        "genero": "Novela histórica",
        "editorial": "Booket",
        "autor": "Carlos Ruiz Zafón",
    },
    {
        "titulo": "Los pilares de la Tierra",
        "genero": "Novela histórica",
        "editorial": "Planeta",
        "autor": "Ken Follett",
    },
    {
        "titulo": "El juego de Ender",
        "genero": "Ciencia ficción",
        "editorial": "Ediciones B",
        "autor": "Orson Scott Card",
    },
    {
        "titulo": "La historia interminable",
        "genero": "Fantasía",
        "editorial": "Alfaguara",
        "autor": "Michael Ende",
    },
    {
        "titulo": "La vida de Pi",
        "genero": "Novela",
        "editorial": "Anagrama",
        "autor": "Yann Martel",
    },
    {
        "titulo": "1984",
        "genero": "Novela distópica",
        "editorial": "DeBolsillo",
        "autor": "George Orwell",
    },
    {
        "titulo": "El retrato de Dorian Gray",
        "genero": "Novela gótica",
        "editorial": "Alianza Editorial",
        "autor": "Oscar Wilde",
    },
    {
        "titulo": "El principito",
        "genero": "Novela",
        "editorial": "Ediciones Salamandra",
        "autor": "Antoine de Saint-Exupéry",
    },
    {
        "titulo": "La casa de los espíritus",
        "genero": "Novela",
        "editorial": "Seix Barral",
        "autor": "Isabel Allende",
    },
    {
        "titulo": "Rayuela",
        "genero": "Novela",
        "editorial": "Sudamericana",
        "autor": "Julio Cortázar",
    },
    {
        "titulo": "Cien años de soledad",
        "genero": "Novela",
        "editorial": "Círculo de Lectores",
        "autor": "Gabriel García Márquez",
    },
    {
        "titulo": "El Quijote",
        "genero": "Novela",
        "editorial": "Ediciones Cátedra",
        "autor": "Miguel de Cervantes Saavedra",
    },
    {
        "titulo": "El señor de los anillos",
        "genero": "Fantasía",
        "editorial": "Minotauro",
        "autor": "J.R.R. Tolkien",
    },
    {
        "titulo": "Harry Potter y la piedra filosofal",
        "genero": "Fantasía",
        "editorial": "Salamandra",
        "autor": "J.K. Rowling",
    },
]

const Informacion = ()=>{
    return(
        <div>
            <ListaLibros libros={libros} />
        </div>
    )
}

export default Informacion;