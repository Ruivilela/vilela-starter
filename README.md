# Just Another Counter App

## The Premise 
It's true the internet is already full of counter apps, so why make another one? 
Well the point for this project is not the Counter itself, but all the  code that is running under the hood.
I've gather on this application, all the things I like to see in a react project. 

If you like it just download the source code, remove the counter and just start coding!

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

* **Note:** If you want to have a database it should be seperated from this app*


## SRC

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
    
```

The idea is that each component has an index.js file, this is where your export lives. 
So when you want to import a component you know it came from that index file. 

Case you want to connect your redux store or pass some actions to your components it should be done in your index.js.
In this scenario create a file with the name component.js, where you'll write your component class. 
This ensures that all aspects of the component are separated, making it easier to develop. It also gives you a visual qeue of where are the things you are looking for. 

This same structure should be applied if you want to create components inside other components. 

* **Note:** Case you want to add other things such as styles or proptypes 
consider putting it in separete files and import it in the necessary place. *
