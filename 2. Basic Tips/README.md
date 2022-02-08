# TypeScript

## In First Folder you are facing some issue like

- What is duplicate identifier issue?
  - so here we are creating 2 files 1 app.ts and after running command it will convert into app.js so both file name is same and in javascipt so if we are putting file in js folder then they act like script file so for that reason this issue occur.
- How to solve it?

  - so we can use modular approach here
  - so just write
  - ```TypeScript
    export {}; // from that you issue is solved
    ```

  - after using above command 2 lines will be added in your js file
    ```TypeScript
    "use strict";
    exports.__esModule = true;
    ```

- What is watch mode?
  - it is a one type of model in which when we are changing file it automatically convert to typescript
  - we can write
  ```TypeScript
    tsc app.ts --watch
  ```
- Run file without browser(Here we have to run js compiled file )

  - ```TypeScript
    node app.js
    ```

- Let Conversion
  - We can consider that we are using let in .ts file but after conversion this will be converted into var.
  - So, the reason behind this is many browser doesn't support let like opera,Microsoft Edge,etc for that reason it will converted into var

> Note: The First important Step if we are Creating Typescript we have to give extension .ts and So, We can not run direct .ts file we have to convert it into JavaScript.

## Installing TypeScript

> Note: For better view in VS Code Install Better Comments Extension

**For install in your system you just need to**

- install node

```TypeScript
npm install -g typescript
```

## Also Check REST FULL API

- [MERN ECOMMERCE USING JAVASCRIPT AND INDUSTRY LEVEL FOLDER STRUCTURE](https://github.com/CodeIntelli/MERN-ECOMMERCE)
