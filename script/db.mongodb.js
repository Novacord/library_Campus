use('library')

db.createCollection('usuarios')

db.createCollection('productos')

db.productos.insertMany([
    {
        "titulo": "El señor de los anillos",
        "genero": "Fantasía",
        "editorial": "Minotauro",
        "autor": "J.R.R. Tolkien",
        "id": "00000000-0000-0000-0000-000000000000",
        "img": "https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg",
        "estado": "disponible"
    },
    {
        "titulo": "Harry Potter y la piedra filosofal",
        "genero": "Fantasía",
        "editorial": "Salamandra",
        "autor": "J.K. Rowling",
        "id": "00000000-0000-0000-0000-000000000001",
        "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg",
        "estado": "disponible"
    },
    {
        "titulo": "Cien años de soledad",
        "genero": "Novela",
        "editorial": "Círculo de Lectores",
        "autor": "Gabriel García Márquez",
        "id": "00000000-0000-0000-0000-000000000002",
        "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/b9/d5/b9d5d415d11423d0f9e98074ee6997d9.jpg",
        "estado": "disponible"
    },
    {
        "titulo": "La metamorfosis",
        "genero": "Cuento",
        "editorial": "Alfaguara",
        "autor": "Franz Kafka",
        "id": "00000000-0000-0000-0000-000000000003",
        "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/c5/71/c571dd1a07a6aaa4107c100eb56fd2aa.jpg",
        "estado": "disponible"
    },
    {
        "titulo": "El Quijote",
        "genero": "Novela",
        "editorial": "Ediciones Cátedra",
        "autor": "Miguel de Cervantes Saavedra",
        "id": "00000000-0000-0000-0000-000000000004",
        "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/37/36/37362c32edc0d3934d7bdd0b05417e75.jpg",
        "estado": "disponible"
    },
    {
        "id": "00000000-0000-0000-0000-000000000005",
        "titulo": "El código da Vinci",
        "genero": "Thriller",
        "editorial": "Planeta",
        "autor": "Dan Brown",
        "img": "https://images.cdn1.buscalibre.com/fit-in/360x360/d6/86/d686caf4216d6d7aa5764943ca189791.jpg",
        "estado": "disponible"
    },
    {
        "id": "00000000-0000-0000-0000-000000000006",
        "titulo": "La sombra del viento",
        "genero": "Novela histórica",
        "editorial": "Booket",
        "autor": "Carlos Ruiz Zafón",
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/4a/f8/4af862174ba709db62744f988c62e3b6.jpg",
        "estado": "disponible"
    },
    {
        "id": "00000000-0000-0000-0000-000000000007",
        "titulo": "Los pilares de la Tierra",
        "genero": "Novela histórica",
        "editorial": "Planeta",
        "autor": "Ken Follett",
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/8b/8e/8b8e1bfb4dcc6229b87537b3704fd607.jpg",
        "estado": "disponible"
    },
    {
        "id": "00000000-0000-0000-0000-000000000008",
        "titulo": "El juego de Ender",
        "genero": "Ciencia ficción",
        "editorial": "Ediciones B",
        "autor": "Orson Scott Card",
        "img": "https://images.cdn1.buscalibre.com/fit-in/360x360/28/31/283174c099cd03a187ab8d9c4bfa35a7.jpg",
        "estado": "disponible"
    },
    {
        "id": "00000000-0000-0000-0000-000000000009",
        "titulo": "La historia interminable",
        "genero": "Fantasía",
        "editorial": "Alfaguara",
        "autor": "Michael Ende",
        "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/6d/8d/6d8d390fd00b7c91ab5a07ecbf25f87d.jpg",
        "estado": "disponible"
    }
])

db.createCollection('reservas')

db.createCollection('prestamos')


