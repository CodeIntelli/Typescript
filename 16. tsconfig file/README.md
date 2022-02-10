# Typescript Configuration in TypeScript

## What is tsconfig file?

- The tsconfig.json file is a file which is in JSON format. In the tsconfig.json file, we can specify various options which tell the compiler how to compile the current project.

- The first step in any new TypeScript project is to add a tsconfig.json file. To create tsconfig.json file open the folder where you want to store your source file and add a new file named tsconfig.json.

- We can compile a typescript project in one of the following ways:

  - By invoking tsc with no input files: In this case, the compiler searches the tsconfig.json file starting in the current directory following the parent directory chain.

  - By invoking tsc with no input files and a --project (or just -p) command: In this case, the compiler specifies the path of a directory which contains a tsconfig.json file. It also specifies a path to a valid .json file which contains the configurations.

## Create tsconfig.json file

- We can create a tsconfig.json file in our project's root folder by using the following command.

  ```TypeScript
  tsc --init
  ```

- If we execute the above command, a default tsconfig.json file will be created.

  ```TypeScript
  {
  "compilerOptions": {
  "declaration": true,
  "emitDecoratorMetadata": false,
  "experimentalDecorators": false,
  "module": "none",
  "moduleResolution": "node",
  "noFallthroughCasesInSwitch": false,
  "noImplicitAny": false,
  "noImplicitReturns": false,
  "removeComments": false,
  "sourceMap": false,
  "strictNullChecks": false,
  "target": "es3"
  },
  "compileOnSave": true
  }
  ```

## Include and Exclude properties

- An include and exclude properties allows us to take an array pattern to add or remove a list of TypeScript files from the compilation process.

  ```TypeScript
  {
      "compilerOptions": {
          "module": "system",
          "noImplicitAny": true,
          "removeComments": true,
          "preserveConstEnums": true,
          "outFile": "../../built/local/tsc.js",
          "sourceMap": true
      },
      "include": [
          "src/**/*"
      ],
      "exclude": [
          "node_modules",
          "**/*.spec.ts"
      ]
  }
  ```

## Installing TypeScript

> Note: For better view in VS Code Install Better Comments Extension

**For install in your system you just need to**

- install node

```TypeScript
npm install -g typescript
```

## Also Check REST FULL API

- [MERN ECOMMERCE USING JAVASCRIPT AND INDUSTRY LEVEL FOLDER STRUCTURE](https://github.com/CodeIntelli/MERN-ECOMMERCE)
