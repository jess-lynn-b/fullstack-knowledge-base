# Configuring the TypeScript Compiler
    When we first executed the # npx tsc it gave us an error. This is because the TypeScript configuration file is missing and a specific file needs to be targeted. 

    In order to configure and compile all the files you will need to add 
    # npx tsc -- init 
    into the terminal. This adds a tsconfig.json file HOWEVER once we start working with Angular we will not need to do that bc the Angular project will do it automatically. 

    In the configuration file you can see the "strict" mode of the type-checking and if it is true it will imply that it is very strict type checking. No need to change anything once we start working with Angular, but this is how to change them if you ever want to in the future.