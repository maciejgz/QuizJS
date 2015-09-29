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

//flattening
var arrays = [[1, 2, 3], [4, 5], [6]];













//END 5. higher-order functions 