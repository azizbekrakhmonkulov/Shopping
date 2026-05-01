class Person {
    static serialNumber = 26;
   
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    introduce(){
      console.log(`My name is ${this.name} I am ${this.age} years old`);
    }
    
    greet(){
      console.log('Hello how are you!');
    }
    
    static help() {
      console.log('Hi I am static!');
    }
  }
  
  const person1 = new Person('Martin', 23);
  const person2 = new Person('Azi', 20);
  const person3 = new Person('Norman', 32);

  person1.greet();
  person1.introduce();
  person2.greet();
  person2.introduce();