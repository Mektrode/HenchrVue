# Henchr

> Get Henchh 

A Javascript (Node.js) PWA (Progressive Web App) built with MongoDB, Express.js for server side calculations and Vue.js for client side hydration, bundled with Webpack.

## Vue tools

- Vuex for State Management: https://github.com/vuejs/vuex
- Vuetify for Material Design look: https://vuetifyjs.com/

## Models

There are two main database models, **Stats** and **Meals**. Each is represented by a NoSQL table.

### Person (:id)

- name:string

- email:email

- username:string

- password:password

### Stats (:id/stats)

- name:string

- age:integer

- height:integer

- weight:integer

- bmi:integer

- targetWeight:integer

- rateOfGrowthPerWeek:integer

*Has Many Meals*

### Meal (:id/meals)

- Name:string

- Calories:integer

- Protein:integer

- Carbohydrates:integer

- Time:date

- person_id:integer

## API Endpoints

All responses will be in JSON format.

The base url format for all endpoints is:

```
http://localhost:8000/api
```

| Method      | URL         | Description  |
| ------------- |-------------| -----|
| GET | **/:id** | get a person by id and also get all the meals and stats associated with that person |
| GET | **/:id/stats** | get person by id and also get all the stats associated with that person |
| POST | **/:id/stats** | create a new stat (name:string, bio:text) |
| PUT | **/:id/stats** | update a new stat (name:string, bio:text) |
| GET | **/:id/meals** | get person by id and also get all the meals associated with that person |
| GET | **/:id/meals/:id** | get a single meal by passing id to params |
| POST | **/:id/meals** | create a new meal (name:string, isbn:integer, publication_date:date, description:text, author_id:integer)|
| DELETE | **/:id/meals** | delete a meal by passing id to params |

## Getting started

First of all, BEFORE you clone this repo, there seems to be a bug on windows for npm installing the pwa-manifest-webpack-plugin.

Thus download version 1.0.4 which is what works for this project at this current time at [1.0.4](https://registry.npmjs.org/pwa-manifest-webpack-plugin/-/pwa-manifest-webpack-plugin-1.0.4.tgz)

Change directories into the package folder and run npm install.

Next clone the repo in another folder elsewhere and change directories into it.

Hit npm install and wait for all other packages to finish installing.

Next copy the "package" folder for pwa-manifest-webpack-plugin that you first installed and paste it into this repos node_modules folder

Rename the "package" folder to pwa-manifest-webpack-plugin.

Finally hit npm start and bring this project to life.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Workflow is run `webpack` to build out client side and `node index` or `npm start` to fire up the server. The app will run on **localhost:8080**

The webpack command will compile the javascripts and Vue templates into bundle.js that is in turn called by index.html. The next command will start the server and server index.html to the browser.

[christianalfoni/webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate) is a good example of a more advanced and integrated webpack-express build system #todo

