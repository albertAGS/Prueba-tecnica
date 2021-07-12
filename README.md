# PruebaTecnica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Build angular

Run `npm install` to install all necessary packages, then run` ng build` to build the project and navigate to `http://localhost:4200/`. The application will reload automatically if you change any of the source files.

There is a file called users.json in the assets that are all the users and passwords to access the application.

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


