# Interface in TypeScript

### What is Inheritance?

- Inheritance is an aspect of OOPs languages, which provides the ability of a program to create a new class from an existing class. It is a mechanism which acquires the properties and behaviors of a class from another class. The class whose members are inherited is called the base class, and the class that inherits those members is called the derived/child/subclass. In child class, we can override or modify the behaviors of its parent class.

- Before ES6, JavaScript uses functions and prototype-based inheritance, but TypeScript supports the class-based inheritance which comes from ES6 version. The TypeScript uses class inheritance through the extends keyword. TypeScript supports only single inheritance and multilevel inheritance. It doesn't support multiple and hybrid inheritance.

- syntax:-

  ```TypeScript
      class sub_class_name extends super_class_name
      {
          // methods and fields
      }
  ```

### Make a parent class

```TypeScript
class Parent {
  name:string;
  setName(name){
      this.name = name;
  }
}
```

### Make a child class

```TypeScript
class Child {
  getName(){
      return this.name
  }
}
```

### Inherit a class

```TypeScript
class Child extends Parent {
  getName(){
      return this.name
  }
}

```

### Types Of Inheritance

- Types of Inheritance
- We can classify the inheritance into the five types. These are:
  - Single Inheritance
  - Multilevel Inheritance
  - Multiple Inheritance
  - Hierarchical Inheritance
  - Hybrid Inheritance

#### Single Inheritance

- Single inheritance can inherit properties and behavior from at most one parent class. It allows a derived/subclass to inherit the properties and behavior of a base class that enable the code reusability as well as we can add new features to the existing code. The single inheritance makes the code less repetitive.

#### Multilevel Inheritance

- When a derived class is derived from another derived class, then this type of inheritance is known as multilevel inheritance. Thus, a multilevel inheritance has more than one parent class. It is similar to the relation between Grandfather, Father, and Child.

#### Multiple Inheritance

- When an object or class inherits the characteristics and features form more than one parent class, then this type of inheritance is known as multiple inheritance. Thus, a multiple inheritance acquires the properties from more than one parent class. TypeScript does not support multiple inheritance.

#### Hierarchical Inheritance

- When more than one subclass is inherited from a single base class, then this type of inheritance is known as hierarchical inheritance. Here, all features which are common in sub-classes are included in the base class. TypeScript does not support hierarchical inheritance.

#### Hybrid Inheritance

- When a class inherits the characteristics and features from more than one form of inheritance, then this type of inheritance is known as Hybrid inheritance. In other words, it is a combination of multilevel and multiple inheritance. We can implement it by combining more than one type of inheritance. TypeScript does not support hybrid inheritance.

## Installing TypeScript

> Note: For better view in VS Code Install Better Comments Extension

**For install in your system you just need to**

- install node

```TypeScript
npm install -g typescript
```

## Also Check REST FULL API

- [MERN ECOMMERCE USING JAVASCRIPT AND INDUSTRY LEVEL FOLDER STRUCTURE](https://github.com/CodeIntelli/MERN-ECOMMERCE)
