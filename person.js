function Person() {
  this.name = "0";
  this.height= "0";
  this.age = 0;
  this.sleeping = false;
}

Person.prototype.eat = function () {
  console.log("Nom nom nom");
};

Person.prototype.sleep = function() {
  if (this.sleeping === false) {
    this.sleeping = true;
    console.log("your sleeping state is: " + this.sleeping);
  } else {
    console.log("you are already asleep!");
  }
};

Person.prototype.wakeUp = function() {
  if (this.sleeping === false) {
    console.log("you are already awake!");
  } else {
      this.sleeping = false;
    console.log("You woke up! Your sleeping state is: "+this.sleeping);
  }
};



function Student() {
  this.studying = false;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.study = function(){
  if (this.studying === false){
    this.studying = true;
    console.log("You started studying! Studying state is: "+ this.studying);
  } else {
    console.log("You are already studying! Studying state is: "+this.studying);
  }
};

Student.prototype.stopStudy = function(){
  if (this.studying === false){
    console.log("you are already not studying! Studying state is: "+this.studying);
  } else {
    this.studying = false;
    console.log("You stopped studying! Studying state is: "+this.studying);
  }
};

Student.prototype.sleep = function(){
  if(this.sleeping === false && this.studying === false){
    this.sleeping = true;
    console.log("The student is not asleep and he is not studying. Going to sleep now. Sleeping state is: "+this.sleeping);
  } else {
    console.log("The student must be awake AND not be studying in order to go to sleep. Sleeping state: "+this.sleeping+" Studying state: "+this.studying);
  }
};