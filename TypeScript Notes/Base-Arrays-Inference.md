# Base Types & Primitives !
This is example is in the TypesUsed.TS folder

   In this we will dive into the basics of TS that one needs to know about.
    
  The core primitives that will be used.
   Primitives: 
   ~Number, String, Boolean 


  # In the next lesson...
   More Complex types:
   ~Arrays, Objects


# Array and Object Types 

This is example is in the TypesUsed.TS folder.

More complex types being used are arrays and objects. In order to tell TypeScript that you want and array of stings within the parameter you must add [] after the array. This tells them that there is more than one (example: strings, booleans, numbers []).

Object Type Defination: In order to define the type for an object you need {} on the other side of : Example:
let person: {
  name: string;
  age: number;
};

# Type Inference

By default the TypeScript tries to infer as many types as possible. So it tried to know what types are used where without you explicitly stating those types. In general would mean that you could write less code. 