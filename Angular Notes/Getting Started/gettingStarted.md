# Angular Intro #
    In control of building out awesome front end web applications. These will be very reactive with great user experiences. Throughout the lessons we will build a real webpage that we can see how it looks in real world applications. 

# What is Angular? #
    Angular is a JavaScript Framework that allows one to create reactive Single-Page-Applications (SPAs). 

    A single page application only uses one HTML file and a bunch of JavaScript code from the server but every change is rendered in the browser. JavaScript is much faster than having to reach out to a server for every page change and for every new data piece you need to display. This allows for web applications to look and feel like mobile applications, they are very fast.

    In order to make lots of changes to make the HTML look and act like multiple pages the JavaScript changes the DOM. The DOM changes whatever is displayed in the browser by changing the HTML code during runtime.

# Angular vs Angular 2 vs Latest Version #

    It started with Angular 1 or Angular JS and this was released a few years ago. Upon using they discovered that it wasn't future proof and had some fundamental flaws because of how it was wrote. 

    Angular 2 released in 2016, was the complete Re-Write of the orginal version. This eliminated the need and use of Angular 1, as the framework for the 2nd version had been completely re-wrote. 

    Angular 4-15 was then developed along the way with a few minor changes but the framework remains the same as it did in Angular 2. There are so many versions because the Angular team releases a new 'major' version every six months. It has changed internally but this does not affect the code that we write or how it functions for us. 

    In concluison we refer to the old version or the orginal version as Angular JS and the one that we currently use no matter the number after is Angular.

# Angular CLI #
    Steps to run the Angular CLI along with NodeJS:
      > sudo npm install -g @angular/cli
      > ng new my-dream-app
      > cd my-dream-app
      > ng serve

    NodeJS is going to be used to bind them together and the npm is manage different dependencies. The dependencies are the framework of Angular. 

    I had trouble getting everything installed properly. However after a few chats and zoom calls i was able to figure it out. I created a folder in the main terminal for the "My-first-app" project and I'm ready to go.

# Editing the First APP

    When you first open the VS Studio while running the Angular folders. It looks like a lot but most of it is just needed to help things run smooth. So the first folder to open is the SRC and then the APP and then the app.html... now we can work! All of the CSS is inside of the HTML folder as well.

    In the HTML to add a text box to accept text:

<input type="text [(ngModel)] ="name>
<p>{{name}}</p>

    In order to make this work you must import this into the app.module.ts folder at the top.
import{FormsModule} from '@angular/forms';

    Then add 'FormsModule' to the imports section of the app.module.ts.

    Then you will open the .ts folder in the app file. It shows the typeScript for the app and you can chnage the title there as well. 

# The Course Structure

    Getting started was all about learing how the application was built and what it can do. Then we downloaded all the necessary files to use in our main terminal. Also learned how to create a folder in the termainal and access it so it creates our first angular application.

    The Basics are to learn more on how to munilipate the angular platform and use it to create an application. The basics will also show how all the files that the terminal creates for you are connected to each other and they are necessary to make the webpages work. 

    Components and databinding these are two important feature they we actually used them a little in the first application we created. Angular apps are built from components and data binding. Data binding is how you output data in to the DOM and react to user events.

    Directives is another key feature that ngModel is also used in with two-way data binding. There are alot of built in directives and more that can be added on manually. 

    Services and dependency injection this is a core feature of Angular and makes it easy to have different pieces in your app communicate with one another. To centralize the code and to manage the state of the application.

    Routing is used to make the user feel like the application is on multiple pages instead of the one using different URL's. 

    Obserables is used after routing and allows you to work with asynchronous code. Angular embraces it anfd its really powerful. 

    Forms this is how to handle the user imput and a key task of almost any application. 

    Pipes this makes it easy to transform the output or the display on the templet at runtime. 

    HTTP is used because Angular can not connect to a database directly but it can connect to the server. This is available in the HTTP section shows how.

    Authentication is how it works and how to implement it in an application.

    Optimizations and NgModules will understand more once we go over these in later videos. 

    Deployment of the application and how to get it from angular to the place of the internet where we can view it. 

    Animations and testing in angular applications to make things more appealing. 


# How to get the most out of the course

    Watch the videos and take notes. 

    Do the assignments and the exercises to get hands on.

    Do the course project with him and pause if needed

    Q and A section is another way to seek more information or help. Also join the Code office hours.

# TypeScript

    It has more features the JS and it allows you to check errors quicker. This will help get a cleaner code and make coding a little faster. TypeScript will be compiled to JS throught the CLI and this is done automatically without thinking about it. Angular meant to be used with TypeScript. 

# Basic project setup using bootstrap for styling

    How to add it locally to your project in the termainl type:

npm install --save bootstrap@3

    this added it to the project only and locally so it will only work inside this project.
    After that is installed in order to run it you need to go to the angular.json file and go to the "styles" sections and above the css info and add...

"node_modules/bootstrap/dist/css/bootstrap.min.css",

  
