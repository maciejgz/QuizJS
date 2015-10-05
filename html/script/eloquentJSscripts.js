//main - odpalanie skryptów dla poszczególnych lekcji.
//w js nie ma możliwości include (jest zaciąganie funkcji w jQuery, więc nie można 



//4. Data structures
function List(val,restList){
    this.value = val; 
    this.rest = restList;
}

function arrayToList(inputArray){
    
    var list = prepend(inputArray[inputArray.length-1],null);
    for(var i=inputArray.length-2;i>=0;i--){
        list = prepend(inputArray[i],list);
    }
    return list;
};



function listToArray(list){
    var i = 0;
    var currentList = null;
    
    var array = new Array(0);
    while(list.rest != null){
        //array.push.apply(array,nth(list,i));
        i++;
    }
};


function prepend(element,list){
    return new List(element,list);
};

function nth(inpuList,position){
    var currentList = null;
    var result = null;
    for(var i = 0;i<=position;i++){
        result = inpuList.value;
        currentList = inpuList.rest;
    }
    return result;
};  



//testy
//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//END 4. Data structures




/** 5. higher-order functions - przekazywanie funkcji przez wartość
 są to funkcje, które operują na innych funkcjach lub inne funkcje są przekazywane im jako argumenty
 każda funkcja w js ma metodę apply, która pozwala na wywołanie metody z dowolną liczbą parametrów.
 w js są zaimplementowane funkcje pozwalające parsować JSONy:
 stringify - json to string 
 parse - obiekt do json
    
    
przekazywanie funkcji przez wartość przydaje się też przy filtrowaniu podając funkcję filtrującą w argumencie metody
*/

//test metody apply:
/*
function repeatTest(number,text,someBool){
  console.log(number + "-" + text + "-" + someBool);  
};
repeatTest.apply(null,[12,"sss",true]);
*/

//flattening
var arrays = [[1, 2, 3], [4, 5], [6]];
var mergedByReduce = arrays.reduce(function(a,b){
    return a.concat(b);
});
//prawidłowe rozwiązanie
//console.log("merged by reduce=" + mergedByReduce);


//Mother-child age difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
};

var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function filter(array,testFunction){
  var passed = [];
    for(var i=0;i<array.length;i++){
      if(testFunction(array[i])){
          passed.push(array[i]);
    }
    return passed;
}};

//głupie podejście bez wykorzystania programowania funkcyjnego i wbudowanych metod prototypowych JS Array
function stupidAverage(ancestry){
    var diffs = [];
    for(var i=0;i<ancestry.length;i++){
        var motherName = ancestry[i].name;
        for(var j=0;j<ancestry.length;j++){
            if(motherName == ancestry[j].mother){
                diffs.push(ancestry[j].born-ancestry[i].born);
            }
        }
    }
    
    var averageAge = average(diffs);
    return averageAge;
};

//console.log(stupidAverage(ancestry));

//stupid version
var averageAge = stupidAverage(ancestry);


///...... kilka ćwieczeń zostało pominiętych. trzeba skończyć bo dotyczą głównie programowania funkcyjnego


//END 5. higher-order functions 



//6. The secret life of objects
//rozszerzanie funkcjonalności obiektów
function Rabbit(rabbitName){
    this.name = rabbitName;
};
Rabbit.prototype.showName = function(){
    console.log(this.name);  
};
var rabb = new Rabbit("rabek");
//rabb.showName();

//dziedziczenie
function BlackRabbit(text){
    Rabbit.call(this,text);
}
BlackRabbit.prototype = Object.create(Rabbit.prototype);
var blackedRabbit = new BlackRabbit("black rabek");
//blackedRabbit.showName();
//nadpsanie metody z klasy nadrzędnej
BlackRabbit.prototype.showName = function(){
    console.log(this.name + "-blacked");  
};
//blackedRabbit.showName();

//ćwiczenia
//A vector type
function Vector(x,y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(anotherVector){
    return (new Vector(this.x+anotherVector.x,this.y + anotherVector.y)); 
}
Vector.prototype.minus = function(anotherVector){
    return (new Vector(this.x-anotherVector.x,this.y - anotherVector.y)); 
}

//inny sposób na definiowanie elementów to wykorzystanie metody defineProperty na obiekcie
Object.defineProperty(Vector.prototype,"length",{
    get: function length(){
        return Math.sqrt(this.x *this.x + this.y * this.y);
    }
});


//another cell

//END 6. The secret life of objects

//7. Project: Electronic Life
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};


//grid
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};


//critter kreatura
//możliwe ruchy kreatury
var directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");

function BouncingCritter() {
  this.direction = randomElement(directionNames);
};

BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != " ")
    this.direction = view.find(" ") || "s";
  return {type: "move", direction: this.direction};
};


//END 7. Project: Electronic Life

