/* 
What is object?
In javaScript, an object is a standalone entity, with properties and type. 

An object type is simply a collection of properties in the form of name and value pairs.

for example. A Car in an object, with propeties. A Car has a color, a desing, speed, brand

In programming languages we often say "An object is an instance of a class".
This means that, using a class, i can create many objects and they all share methods and properties.

Since  objects can be enhanced, there are many ways to create objects sharing methods and properties. But we want the simplest one. 

Inheritance: Agar apke pass ek parent class he usme kuch yese mathod our properties he you know agar hum kisi dusre new drive class me chahe to usko hum inherit kar skte he that is the power of inheritance.  jese humare dada ki kuch propeties humre papa ne inherit ki hogi vese hi humare papa ki kuch propertie hogi jo hume li hoti jese koi jin inheit kr rkah ho


From Mozilla MDN page about classes:
JavaScript classes are templates for javaScript Objects.
Classe are bit of code that encompass multiple objects, methods and allow manipulation for it's member variables and funcitons. 

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.

A class is a type of funciton, but insted of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

for OPPs
A class is a user defined blueprint or prototype from which objects are created. It represents the set of properties of methods that are common to all objects of one type

*/

class Students{
    constructor(name,age,cls){
        this.myname = name;
        this.myage = age;
        this.mycls = cls;
    }
// instance method: means  
    biodata(){
        return `Hi my name is ${this.myname}. I am ${this.myage} year old and i am in class ${this.mycls}.`;
    }
    
}



class Player extends Students{

    constructor(name,age,cls,game){
        super(name,age,cls);
        this.mygame = game;
    }

    // biodata(){
    //     console.log(`Hi my name is ${this.myname}. I am ${this.myage} year old and i am in class ${this.mycls}. i like to play ${this.mygame}`);
    // }
    
    player_biodata(){
      return `${super.biodata()}.i like to play ${this.mygame}.` 
    }
}


let obj3 = new Player('aarsh', 35, 'MCM', 'Cricket');

console.log(obj3.player_biodata());


class Students{
    constructor(myName){
        this.schoolName="PWS";
        this.name = myName;
    }
    sayHello(){
        console.log("Hello " + this.name);
    }
}

let stud1 = new Students("Amar");
stud1.sayHello();