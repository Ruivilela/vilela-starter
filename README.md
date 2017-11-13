# Just Another Counter App

## The Premise 
It's true that the internet is already full of counter apps, so why make another one? 
Well the point for this project is not the Counter itself, but all the  code that is running under the hood.
I've gather on this application, all the things I like to see in a react project. 

If you like it just download the source code, remove the counter and just start coding!

Oh I forgot to mention, this app has the necessary build for a deployment so you've got that covered ;)! 

# Development server

If you want to start developing now just run: 

``` 
npm i 
npm run dev
```

Your application should open right away, if for some reason it didn't open, the applicaton lives in localhost:8080

# Project Architecture 
This Project uses Redux, so in order to work on it you have to know the basics of state management in a react applications. 

There are three main folders that you should know about: 

- **SRC** , where the whole application lives.
- **PUBLIC** , your bundle files live here and also if you want to add static files
- **SERVER** , a small [express server](https://expressjs.com/, "express.js") so you can deploy your app easily.

***Note:** If you want to have a database it should be seperated from this app*

### Component Structure

```
|- src
|    |- app
|    |    | - components
|    |    |    | - component A
|    |    |    |    | - deeper component
|    |    |    |    |     index.js
|    |    |    |    |     component.js
|    |    |    |  index.js
|    |    |    |  component.js
|    |    |
|    |    | - component B
|    |    |    |   index.js
|    |  app.js
```

The idea is that each component has an index.js file, this is where your export lives. 
So when you want to import a component you know it came from that index file. 

Case you want to connect your redux store or pass some actions to your components it should be done in your index.js.
In this scenario create a file with the name component.js, where you'll write your component class. 
This ensures that all aspects of the component are separated, making it easier to develop. It also gives you a visual qeue of where are the things you are looking for. 

This same structure should be applied if you want to create components inside other components. 

In the end the app.js file is the entry file for your bundle. 

***Note:** Case you want to add other things such as styles or proptypes consider putting it in separete files and import it in the necessary place.*

### Router

This app uses [react-router](https://github.com/ReactTraining/react-router) so place your components in their respective route and import the router to the app.js file. 

### State

This app uses [redux](https://github.com/reactjs/react-redux), for state management, with [sagas](https://github.com/redux-saga/redux-saga) to make async calls more manageable.
The structure goes as follows:

```
|- src
|    |- state
|    |    | - state1
|    |    |   actions.js
|    |    |   reducer.js
|    |    |   effects.js
|    |    |   state.js
|    |    |  
|    |    | - state2
|    |    |  actions.js  
|    |    |  reducer.js  
|    |    |  state.js 
|    |    |   
|    |  store.js
```

In many react applications with redux implemented, tend to put all actions into and all reducers into to another. As applications goes this kind of structure gets really confusing. From an user stand point this gets really messy when you have many reducers implemented, and want to add new actions. 

What I purpose is to divide the state by functionality, an element or a part of your application. In my application state1 would be called counter. This way I can manage everything related to the counter in the same place. 

In each state folder there are 3 main files 
- **actions.js**, all actions should be in this file and registered in the reducers.js or effects.js. If you prefer you could create a folder called actions and create a file per action. Case your more comfortable with that.
- **reducer.js**, your reducer lives here and registered in the store.js.
- **state.js**, set here the initial state. It allows you to know which attributes your state has when starting your application. Don't forget to add the state to your reducer as your default state. 

You can also add **effects.js** to your state folder this is not mandatory, but case you want to manage async calls it makes everything more manageable. Check [Redux-Sagas](https://github.com/redux-saga/redux-saga) github page to learn how to use it. 

# Webpack configuration

## Alias
```
const app = path.resolve(__dirname, 'src/app')
const state = path.resolve(__dirname, 'src/state')

....

  resolve: {
    alias: {
      '@app': app,      
      '@state': state
    }
  }
```
Use alias in your webpack to your most access folder, this way, when making imports your paths get more readable. Especially when you are into to deep in a specific folder.

## Define plugin

```
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'PORT':JSON.stringify(8080)        
      }
    })
  ]
```

This allows you to create variables that you can access anywhere in your project. This is usefull when you want to establish different variables for different environments. 

## Webpack dev configuration 
    - Hot module reloading
    
# Deploy 

## Docker + Docker Cloud + AWS (the most difficult setup)

- [Install docker](https://docs.docker.com/engine/installation/)
- create a Docker account

In your project run:

```
docker build -t react-docker .
```

After the docker image is finishing building, enter in to your [docker hub account](https://hub.docker.com/).
Create a repository in the docker hub and name it.

Then in your project terminal run:
```
docker login
```
You'll be prompted to insert your docker account credentials
```
docker push yourdockeracountname/repositoryname:descriptive_name
```

After this step is finished, create an aws account. After your account is created go to [IAM](https://aws.amazon.com/iam/). 
When you're logged into the IAM console on your left there is a sidebar select "Roles". 
A menu will appear and click on "create role". 
A new menu will prompt and select Another AWS Account. There will be a field asking for account ID, insert the following id 689684103426.
As an option select *"Require external ID (Best practice when a third party will assume this role)"* and insert in the *"External ID"* field your docker account name and then procceed. As a final step add the following [custom policy](https://gist.github.com/Ruivilela/67e0dfe578fa4d4017b634d6a024d89d) and you are done with creatin your role.   






