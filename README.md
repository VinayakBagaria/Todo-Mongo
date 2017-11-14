<h1 align="center">
  Todo-Mongo
</h1>
Mongodb based Todo application. No requirements to learn the database rules and structures as schema will be similar to objects
in JS.

## Getting Started

Instructions on how to set up this project and run node command on it.

## Prerequisites

Set up mLab for online Mongodb database for free using Sandbox version [here](http://docs.mlab.com/).

## Installing

To get your development running, first install the dependencies : <br>

![npm install](https://github.com/VinayakBagaria/Todo-Mongo/blob/master/images/npmInstall.png?raw=true)
  
 - `body-parser` : parse form data when POST request comes
 - `dotenv` : Environment variables for mLab username, password and db name
 - `ejs` : View for the app
 - `express` : Backend server for the app
 - `mongoose` : Connect the app to mLab

## Set up

Set up environment variables for the mLab username, password, db name by getting the values from Prerequisites section. Create
`.env` file in the project's root with the key as shown and value according to your configuration.

![env config](https://github.com/VinayakBagaria/Todo-Mongo/blob/master/images/env.png?raw=true)

## Running

Run the app by writing in terminal `node app.js`. Server should start at port `3000` and the application should be running at [http://localhost:3000/todo](http://localhost:3000/todo)
