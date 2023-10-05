# Library

Este aplicativo es una biblioteca virtual que permite a los usuarios reservar libros. El aplicativo tiene un nav con tres opciones:

- Inicio: muestra una lista de los libros disponibles para reservar.
- Libros: permite a los usuarios reservar libros.
- Login: permite a los usuarios iniciar sesión como un usuario normal o como un admin.

**Login como usuario normal**

El login como usuario normal se realiza a través de Discord. El aplicativo valida si el usuario está en el servidor de Campusland de Discord. Si el usuario está en el servidor, puede iniciar sesión con su nombre de usuario y contraseña de Discord.

**Después de iniciar sesión**

Después de iniciar sesión, el nav cambia. En la sección de libros, los usuarios pueden reservar libros. También aparece un apartado de perfil de libros reservados por el usuario y un botón para cerrar sesión.

**Perfil de libros reservados**

El perfil de libros reservados muestra una lista de los libros que el usuario ha reservado. El usuario puede ver el título del libro, el autor, el estado de la reserva y la fecha de vencimiento.

**Cerrar sesión**

El botón de cerrar sesión cierra la sesión del usuario.

**Requisitos**

- Discord
- Node.js
- NPM

**Instalación**

1. Clona el repositorio de GitHub:

```
git clone https://github.com/Novacord/library_Campus.git
```

1. Instala las dependencias:

```
npm install
```

**Ejecución**

1. Inicia el servidor y Vite:

```
npm run dev
```

el comando levanta el servidor de node js y levanta vite.

**Ejemplo de uso**.

1. Abre el navegador y accede a la URL del aplicativo.
2. Haz clic en el botón "Login".
3. Introduce tu nombre de usuario y contraseña de Discord.
4. Haz clic en el botón "Iniciar sesión".
5. Haz clic en el botón "Libros".
6. Selecciona un libro y haz clic en el botón "Reservar".
7. El libro se reservará y se mostrará en tu perfil.

**Descripción de las opciones de administrador**

Las opciones de administrador del aplicativo de biblioteca permiten a los usuarios con permisos de administrador realizar las siguientes tareas:

- **Préstamos de libros:** el administrador puede realizar préstamos de libros a los usuarios.
- **Insertar libros al inventario:** el administrador puede agregar libros al inventario de la biblioteca.
- **Aceptar reservas de libros:** el administrador puede aceptar reservas de libros hechas por usuarios normales.