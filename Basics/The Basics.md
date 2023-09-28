# The Basics section of videos for Angular

# How Angular app is loaded and started

  The index.html file is actually served by the server and angular is a framework that allows you to create single page applications, this is the single page 'index.html'.

  index.html file looks normal until you get to the body. The body has app root and loading... , this is because app root is our own component. We will learn how to create our own later on. The CLI created this one for us and it will work just fine to tie our entire application together. All the files in the app folder are related to this one and we can see that bc they all have component in the name. 

# Components are Important

  This is how applications are parse together to let them load on to the webpage and work like they should. Angular will overorad the runtime and load the way we are used to them working. 

  Componests are akey feature in the web application development and you can create your own components to use. We start with the root component and this holds the entire application in the end. 

  The fitting component is the header and maybe also has some other items on the header as well. 

  The main area is also a component and well as the side bar. Thus is the core idea behind Angular, to build components and they each have thier own template and own HTML code, possibly their own styling as well. They also have their own business logic and this is a great benefit and allows to split up the complex application webpages into reusable parts. Thus allowing the componets to be used more than once and allow you to easily replicate the business logic, styling or make a finely controlled piece in application without having fit everything into one script or one HTML file. 

# Creating a new Component

    Start with the app component it is a normal Angular component but it is also the root component. Anything added to the file will not be added to the HTML file but it will be added to the app.component.html file. This is the root component of the app where we add the other parts. 

    Lets add a component to the app now... we are building a bacl-end for our server management application and we need to output some server information. So the steps to do this are:

1   In the app folder start a   new directory (subfolder) and  call it 'server' it will hold  all the componets that deal  with the servers. Then add a file and name it 'server. component.ts'. All app related content of  a CLI project will  go into the app folder.   

2   Now that the file is creatd we will add the component. In the server.component.ts file you will add this: 

import { Component } from '@angular/core';


@Component( {
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

}


Then you will create another file server.component.html and link it to the .ts file as did above... 
  Now we have our own component and now time to use it...


# Understanding the role of AppModule and component declaration

    In order to use our own component we created in the last section we need to change something in the app module. The app module is a bundle of functionalities of the app and it basically gives Angular the information of the features the app has and uses them. 

    In the app.module.ts file we make sure that the @NgModule decorator is imported from the @angular/core. In this file we can see four properties that we set up object passed to @NgModule: declarations, imports, providers and bootstrap. 

    Bootstrap is what tells the app what to be aware of at the point of time the whole application starts and what to recognize int he index.html file. 

    In order to use the new component created you must add it to the app.module.ts bc by default Angular will not scan all your files here. If you dont tell it that a server component exists, it will not know it and creating the file isnt enough it must be added here.  

    So register the new component in the declarations array... [
      AppComponent,
      ServerComponent
    ]

    ... but adding it there isn't enough bc TypeScript will not know where to pull it from we have to also add the import at the top:

import { ServerComponent } from './server/server.component';

    Now that we have registered the component we can use it....

# Using custom components

  We are going to open the app.component.html file to use it here. Under the line of code wrote before add:

<hr>
<app-server></app-server>

  This will then display the server component on the html page we see. 

# Creating components with the CLI & Nesting components

  In the terminal you can create a new folder:

ng generate component servers
        or
ng g c servers

  This creates a new folder in the app with the name servers. This looks the same as the app folder and the server folder as well. In the new servers.compononent.html folder override the text and attach the:
<app-server></app-server>
  tag line to link the two together. 

  Then in the app.module.ts make sure the import{serversComponent} is linked properly. Make sure to update the app.component.html with the new tag of servers...

# Working with component templates

    Instead of using an external templet file you can also use an inline template so you define the HTML code in the TypseScript code. Start in the servers.component.ts file and it points to the HTML file. Change the template url to just:

  template:<app-server></app-server><app-server></app-server>

    This makes everything appear as it did before like no change was made. However we did change the way we set up our template here and you could even write multi-line strings here if you want to add more HTML. In doing this you would switch from a normal string with single quotation marks to using the back ticks. That would use the JS template expressions in allowing to write multi-line strings. 

    If you don't have a lot of HTML code then its ok to use the inline TS to write this. However if you have more than 3 lines of code in the HTML part here in this template it owuld be best to use the external file and makes it easier to follow. 

    Reminder you must have at least a template in a component in order to use it.You do not have to add style but the templates must be present.

# Working with Component styles

    You can add style to the app.component.html file just as if you would with CSS using the built in bootstrap that was linked. We can also use styling that was given to us by Angular. In doing this we need to go into the app.component.css file...

    Just like typical styling in css:

h3 {
  color:darkblue;
}

    changes the color of the h3 tag line to dark blue. Then link the css styleUrl to the app.component.ts

# Fully Understanding the component selector

  Making sure to link the css pages together in order to style them properly. Also select the app servers element by putting the app servers in the selector file of servers.component.ts

  Also root the file together by changing the selector in the html file by adding <div app-servers ></div>

  You can also add the class to the html:

<div class="app-servers"></div>

    The element style is the most common to use in Angular <app-servers></app-servers>

# Databinding... what is it?

    So far we have only outputted some basic data and now lets create dynamic data. It will not be hardcoded into the template, so now its time for data binding. 

    Data binding is communication between your TypeScript code from the component (business logic and the template) this is what the user sees (HTML). The only thing that the user can see is the template so we need communication between the template and the TS code.

    That brings us to data binding and that is responsible for this type of communication. To out put from the TS to the HTML we can use string interpolation for this...

({{data}}) -string interpolation

 ([property]="data") -property binding

    If user needs to communicate back to the TS code to interact with the webpage... Event Binding

  ((event)="expression") 

    Two way data binding... this is where we can react something and then use a click to communicate back.

    ([(ngModel)] = "data") 

# String Interpolation 

    In order for the .html to put out information we must add it to the .ts file first...

export class ServerComponent {
  serverId = 10;
  ServerStatus = 'offline';
}

  then in the .html we can add it like this...

<p>Server with ID {{ServerId}} is {{ServerStatus}} </p>

 #   Property Binding vs String interpolation

    You can use string interpolation to allow the new server to be added on the servers.component.html file under the button class.  Using string interpolation also allows you to put text next to something that you are outputting.

    Property binding can be used to bind to a peoperty of this element, the innerText property and set it equal to allow the new server. If you want to change some property either HTML element, directive or component typically use property binding. 

    Don't mix the two... Use either one or the other!

# Event Binding
    Listen to the click event with the syntax that Angular offers, thus using event binding and using () like property binding.

     Bind to the click event using:

<button class="btn btn-primary" [disabled]= "!allowNewServer"(click)="">Add Server</button>

      the (click)="" attribute. 
      Between the "" you can call a method or a function to call once it is clicked... example:

(click)="onCreatServer()"...

      Create the method being called in the servers.componet.ts file:

 onCreateServer (){
    this.serverCreationStatus = 'Server was created!';}

        also in the export class...

  serverCreationStatus = 'No server was created!';

        That is how to event bind to make a click button work and show a function once the action of clicking is taken.

# Passing and using data with event binding

      First add some bootstap and then a method to the .html file at the top.

<label>Server Name</label>
<input
type="text"
class="form-control"
(input)="onUpdateServerName()">

      Now creat the method in the .ts file with this we want to output what the user has entered. This can be achieve by passing in $event into the () above. 

onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
      In the .ts file and then in the export class same file add...

serverName = '';

      Back to the HTML file add <p> {{serverName}} </p>

      this will output the name typed in the box!!

# Two-way databinding

    This combine property and event binding together to make for easier way to pull information. In order to do this we need to use a special directive... ngModel

    This will trigger on the input event and update the value of server name in our component automatically.
    .html
<input
  type="text"
  class="form-control"
[(ngModel)]= "serverName">

    However since it is two-way binding it also updates the value of the input element if we change server name somewhere else.   

# Combing all forms of databinding

    We can combine all four forms together to create this...

    in.ts file
onCreateServer (){
    this.serverCreationStatus = 'Server was created! Their name is ' + this.serverName + '.';
  }

    This will display in the text box Their name is...

# Understanding directives

  Directives are instructions in the DOM and we already use directives without knowing it with components. When the selector of the component somewhere in the template, we are telling Angular to add the content of our component template and the business logic in TS code where we use the selector. 

  There are directive with and without a template. Directives are typically added with attribute selector but technically the selector of a directive can be configured just like the selcetor of a component and use CSS classes or elements style.

  Example:

@Directive({
  selector:'[appTurnGreen]'
})
export class TurnGreenDirective {
  ...
}

# Using nglf to Output data conditionally

    The directive shipping with Angular, the bglf directive works like an 'if' statement and will allows us to remove all the text we don't want displayed to the user. To add this to the <p>...

<p *ngIf="serverCreated">Server was created, server name is {{serverName}}</p>

    The * is required. Inside the "" it must return either true or false when the question is asked.

# Enhancing nglf with Else Condition

    Most of the time you will use the syntax above when it comes to ngIf. However,when you not only need the if condition but the else condition as well.

    Example from the .html folder

<p *ngIf="serverCreated; else noServer">Server was created, server name is {{serverName}}</p>
<ng-template #noServer>
  <p>No server was created!</p>
</ng-template>

# Styling elements dynamically with ngStyle

    How to create a function where it will display either online or offline based on math. random...

.ts server
 constructor () {
    this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

      ngStyle allows you to dynamically update the styles and create unique designs. 

# Applying css classes dynamically with ngClass

    Adding ngClass is where ngStyle allowed us to change the CSS style its self, ngClass allows us to dynamically add or remove CSS classes. 

    This only works as intended when using property binding. 


# Outputting lists with ngFor

    We can add servers to our list as they type in their information with the ngFor. 

*ngFor

#





