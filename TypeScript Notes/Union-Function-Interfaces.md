# Union Types
 Working with Union Types is a type defination that allows more than one type of object. This is added after the : and the type then the | symbol and another type.

 Example if you want to add the name of the course but also the number. 

 let course: string | number = 'React -The Complete Guide';

 You can have as many different types as needed in the set.

 # Assigning Type Aliases

 In most codes it will be common to repeat the same type defination. The best way to aviod this is to create a type aliases by defining your own base type. This would allow for a more complex defination to be stored and then use that type alias instead of repeating the entire type definitions.

 In order to create this you use the word 
 ` type` that is not in JS but is in TS instead. After the `type` keyword then you use any name of your choice that will be the new type name. 

 In using this it is a pure TS feature that will be thrown out in JS once it is complied as it will not work in JS. 
 Example:
 type Person = {
    name: string;
    age: number;
 };

 In using this you can replace all of the places that the object type was used with.

 " let person: Person; " 
 This will work and only have to define it once and then it can be type aliases otherwise. 

 # Diving into Functions and Function Types

  Functions and types when working with functions there are different places that types can be assigned. Just as thought you can set types for variables, you can also set types for parameters.

    When using this is tells us the type infers used in order to get the inferred return value type. You can also set the return value after the ) put a : and then a string or union type to get the correct outcome. However you dont need to do this as type script will automatically do it for you. 

  # Understanding Generics

      These are codde templates that you can define and reuse throughout the codebase. They provide a way to tell functions, classes or interfaces what type you want and when to call it.

      This whats you to use 'any' in the type but this also removes all kind of TypeScript support after the function is called.  

      However with the generics feature we can convert the function into a generic function. Add < T > to the code

      Example:

    function insertAtBeginning < T >(array: any[], value: any){
      ...
    }

    In doing this you can now use the short cut of T instead of the long code version. This is only available in TypeScript not JavaScript. Helps you write functions in this case that are type safe yet flexible. Once that type is used for a certain function tho that type is then locked in and known. 

  # Classes & Features

    Classes help to define blueprints for objects with the help of the class keyword. Inside the class you can add properties and methods.

    Example:
    class Student {
  firstName: string;
  lastName: string;
  age: number;
  courses: string;
}

    This defines a blueprint and one can also add a constructor function to define the default method to be called. This is after you instantiate a new object based on that class here. 

    The nice thing about classes with TS is it allows you to define all the properites in the class in advance and set the type. However in JS it will not allow that. in JS you only need to define them inside of the constructor.

    In TypeScript you can controll wheater a property or a method is accessible by the public or if it should be private. Private means that it can only be used inside the class. Public is where it can be accessed from outside of tha class through the dot notation. In order to make it private you just need to add the keyword 'private' in front of the property defination. 

  # Working with Interfaces

    This is a feature that is only available in TypeScript and will not compile to JS. Interfaces are really just object type definitions. Also force us to set up a certain structure for our classes, to be used.

    Example:
    interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}
let max: Human;
max = {
  firstName:'Max',
  age: 32,
  greet {
    console.log('Hello!');
  },
};

This is using interfaces to define object types but you can also do this with the type keyword to create an alias. Interfaces are an alternative and you can use them instead of the type keyword when you want to define object types. 

Interfaces *can* be implemented by classes and when they are they force classes to have that structure defined by interface. This can be helpful when your are building something with other developers and you want to make sure something has a certain structure or certain method. 

