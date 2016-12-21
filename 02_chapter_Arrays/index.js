/**
 * Created by dvlima on 20/12/16.
 */

/**
 * Chapter 02 Arrays
 */

/** Method          Description
    concat          Joins multiple arrays and returns a	copy of the joined arrays.
    every           Calls a function for every element of the array	until false is returned.
    filter          Creates	an	array	with	each	element	that	evaluates	to	 true 	in	the	function	provided
    forEach         Executes	a	specific	function	on	each	element	of	the	array
    join            Joins	all	the	array	elements	into	a	string
    indexOf         Searches	the	array	for	specific	elements	and	returns	its	position
    lastIndexOf     Returns	the	last	item	in	the	array	that	matches	the	search	criteria	and	returns	its	position
    map             Creates	a	new	array	with	the	result	of	calling	the	specified	function	on	each	element	of	the	array
    reverse         Reverses	the	array	so	the	last	items	become	the	first	and	vice	versa
    slice           Returns	a	new	array	from	the	specified	index
    some            Passes	each	element	through	the	supplied	function	until	 true 	is	returned
    sort            Sorts	the	array	alphabetically	or	by	the	supplied	function
    toString        Returns	the	array	as	a	string
    valueOf         Like	the	method	 toString ,	this	returns	the	array	as	a	string
 */

var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers[numbers.length] = 10;

//Insert into last position array
numbers.push(11);
numbers.push(12, 13);
console.log("push",numbers);

/**
 * To remove a value from the end of an	array,
 * we can use the pop method:
 */
numbers.pop();
console.log("pop", numbers);

/**
 * unshift
 * inserts the values passed in	the	method’s arguments
 * at the start of the array
 */
numbers.unshift(-11);
numbers.unshift(-12, -13);
console.log("unshift", numbers);

/**
 * Remove a value from the beginning of an array
 */
numbers.shift();
console.log("shift", numbers);

/**
 * We	can	use	the	 splice 	method	to	remove	an	element	from	an	array	by	simply	specifying
 the	position/index	we	would	like	to	delete	from	and	how	many	elements	we	would	like	toremove:
 */
console.clear();
numbers.splice(0, 2); //indexStart, deleteCount
console.log("splice", numbers);
numbers.splice(5,0,2,3,4);// insert at the position numbers[5] values 2,3,4
console.log("splice 2,3,4", numbers);
numbers.splice(5,3,20,30,40);// at position [5] deleteCount = 3 and insert 2,3,4
console.log("splice 2,3,4", numbers);
console.log("sort", ['e','d','c','b','a'].sort());//Ordena o array

/**
 * Two-dimensional and multi-dimensional arrays
 */
var	averageTemp	=	[];
averageTemp[0]	=	[72,75,79,79,81,81];
averageTemp[1]	=	[81,79,75,75,73,72];

/**
 * Joining multiple arrays
 */
var	zero	=	0;
var	positiveNumbers	=	[1,2,3];
var	negativeNumbers	=	[-3,-2,-1];
var joinArray = negativeNumbers.concat(zero, positiveNumbers);
console.log(joinArray);

/**
 * Iterator	functions
 */
var	arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function isEven(x) {
    return x % 2 === 0;
}

//The every method	will iterate each element of the array until the return	of the function	is false:
arrayNumbers.every(isEven);

//the some method will iterate each element of the array until the return of the function is true:
arrayNumbers.some(isEven);

//forEach function iterate all array
arrayNumbers.forEach(isEven);           //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//map iterator method that return a	new	array with a result.
numbers.map(isEven);                    //[true, false, true, false, true, true, true, true, false, true, false, true, false, true, false, true]

//filter It	returns	a new array	with the elements that the function returned true :
arrayNumbers.filter(isEven);            //[2, 4, 6, 8, 10, 12, 14]

/** Reduce method	also receives a	function with the following	parameters:
 *  previousValue, currentValue, index , and array.
 */

var sum = arrayNumbers.reduce(function (previous, current, index) {
    return previous + current;
});
console.log(sum);// 120

var sumObj = [{id:100, value:1},{id:200, value:5},{id:300, value:15}].reduce(function (previous, current, index) {
    return {value: previous.value + current.value};
});
console.log(sumObj.value);// 21

/**
 * Searching and sorting
 */
console.clear();
arrayNumbers.reverse(); //[15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
arrayNumbers.sort();    //[1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    //	a	===	b
    return 0;
}
arrayNumbers.sort(compare); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//Searching
arrayNumbers.indexOf(10);       //9
arrayNumbers.indexOf(100);      //-1

arrayNumbers.push(10);
arrayNumbers.lastIndexOf(10);   //15
arrayNumbers.lastIndexOf(100);  //-1
arrayNumbers.pop();

var numbersString = arrayNumbers.join('-'); // 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15
console.log(numbersString);