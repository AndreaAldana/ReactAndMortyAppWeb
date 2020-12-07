# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

1. git clone https://github.com/AndreaAldana/ReactAndMortyAppWeb.git
2. npm i
3. npm start

¡A disfrutar!

Para Login: "email": "eve.holt@reqres.in",
    "password": "cityslicka"

Para Register:  "email": "eve.holt@reqres.in",
    "password": "pistol"

Resultado de una prueba técnica, posee AuthGuard(Protección de rutas al loguearse el usuario, no puede acceder al login ni al register), filtros de búsqueda por categorías, carruseles con datos de Rick And Morty, vista en detalle de sus datos.

Se consumieron 2 API's, una de Rick And Morty y ReqRes, la cual es usada para simular un registro y un login sin un backend. Con esto último, también verifica y mantiene los datos del usuario, siendo un logueo consistente, en donde también, muestra su correo en la nav bar. Por supuesto, posee su log out el cual limpia el local storage.

Al parecer la api solo está fallando si el correo no es el indicado más arriba, pero al momento de desarrollar esta aplicación, verificaba tanto el correo como la contraseña.