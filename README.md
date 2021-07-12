# PruebaTecnica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Build angular

Run `npm install` to install all the packages.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The name and password are required to access in the application, there's a .json inside assets called `users.json` with all the possibilities, use whatever you want, depends on the selected user you'll be able to edit only your own TODO's, although you can delete all of them.

## Build java

The BBDD used is mysql use the following. I've used jdk-11 to run the app.

### Apis

Create user: 
    post `localhost:8080/api/users`
    Body:   {
                "name": "albert",
                "username": "a.griera",
                "password": "albert@gmail.com"
            }

Get users: get `localhost:8080/api/users`

    Body optional {
        "pageNumber": 1,
        "pageLength": 2
    }

Get users by id: get `localhost:8080/api/users/1`

Get todos: get `localhost:8080/api/todos`

    Body optional {
        "pageNumber": 1,
        "pageLength": 2
    }


Delete user: delete `localhost:8080/api/users/1`

Modify user: put`localhost:8080/api/users/1`


Run `npm install` to install all the packages.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The name and password are required to access in the application, there's a .json inside assets called `users.json` with all the possibilities, use whatever you want, depends on the selected user you'll be able to edit only your own TODO's, although you can delete all of them.

