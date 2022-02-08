# Namespace in TypeScript

- The namespace is a way which is used for logical grouping of functionalities. It encapsulates the features and objects that share common relationships. It allows us to organize our code in a much cleaner way.

- A namespace is also known as internal modules. A namespace can also include interfaces, classes, functions, and variables to support a group of related functionalities.

- Unlike JavaScript, namespaces are inbuilt into TypeScript. In JavaScript, the variables declarations go into the global scope. If the multiple JavaScript files are used in the same project, then there will be a possibility of confusing new users by overwriting them with a similar name. Hence, the use of TypeScript namespace removes the naming collisions.

## Namespace Declaration

- We can create a namespace by using the namespace keyword followed by the namespace_name. All the interfaces, classes, functions, and variables can be defined in the curly braces{} by using the export keyword. The export keyword makes each component accessible to outside the namespaces. We can declare the namespace as below.

  ```TypeScript
  namespace <namespace_name> {
  export interface I1 { }
  export class c1{ }
  }
  ```

- To access the interfaces, classes, functions, and variables in another namespace, we can use the following syntax.

  ```TypeScript
  namespaceName.className;
  namespaceName.functionName;
  ```

- If the namespace is in separate TypeScript file, then it must be referenced by using triple-slash (///) reference syntax.

  ```TypeScript
  /// < reference path = "Namespace_FileName.ts" />
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
