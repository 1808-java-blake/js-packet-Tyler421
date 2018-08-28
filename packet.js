// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I
// Create a single Javascript file called packet.js to answer these questions.

// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

function fib(n){
	let a = 1;
	let b = 0;
	let c = 1;

	while(a < n){
		let next = c + b;
		b = c;
		c = next;
		a++;
	}
	return c;
}


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray)
{
	let changed;
	do{
		changed=false;
		for(let i = 0; i<numArray.length-1; i++)
		{
			if(numArray[i] > numArray[i+1])
			{
				let temp = numArray[i];
				numArray[i] =numArray[i+1];
				numArray[i+1]=temp;
				changed=true;
			}
		}
    }
    
    while(changed);
    {
        return numArray
    }
}



// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseString(someStr)
{
	let newString = "";
	for(let i = someStr.length-1; i>=0; i--)
	{
		newString+=someStr[i];
	}
	return newString;
}


// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum)
{
    if(someNum>0)
    {
        return someNum*factorial(someNum-1);
    }
        
    else
    {
        return 1;
    }
}



// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) 
{
    if (someStr === null || undefined)
    {
        alert("Cannot use an undefined or null value.");
    } 
    else if (offset > length - 1 || offset < 0)
    {
        alert("Offset cannot be greater then length.");
    } 
    else if (length !== someStr.length)
    {
        alert("Entered wrong value for length of string");
    } 
    else 
    {
        let split = someStr.split("");
		let sub = [];
		for (let i = offset, j = 0; i < length; i++ , j++) {
			sub[j] = split[i];
		}
		return sub.join("");
    }
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) 
{
    someNum = someNum / 2;
    someNum === Math.floor(someNum);
    return someNum;
}


// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someString) 
{
    newString == someString.split('').reverse().join('');
    if(newString === someString.reverse())
    {
        consol.log(newString);
        return true;
        
    }
    else
    {
        consol.log(newString);
        return false;
    }

    
}


// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character) {
    switch (shape) 
    {
        case "Square":
            for (let i = 0; i < height; i++) 
            {
                console.log(character.repeat(height));
            }
            break;

        case "Triangle":
            for (let i = 1; i <= height; i++) 
            {
                console.log(character.repeat(i))
            }
            break;

        case "Diamond":
            const a = Math.floor(height / 2);
            let b = a;
            for (let i = 1; i <= height; i++) 
            {
                let newString = '';
                newString += ' '.repeat(b);
                newString += character.repeat(height - (b * 2));
                console.log(newString);
                if (i > a) 
                {
                    b++;
                } 
                else 
                {
                    b--;
                }
            }
            break;
    }
}


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) 
{
	let properties = Object.keys(someObj);
    for (let i = 0; i < properties.length; i++)
    {
		console.log('Object properties = ' + properties[i] + 'with a value of ' + someObj[properties[i]]);
	}
}


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.


function deleteElement(someArr) 
{
	console.log(someArr.length);
	delete someArr[2];
	console.log(someArr.length);
}


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) 
{
	console.log(someArr.length);
	someArr.splice(2, 1);
	console.log(someArr.length);
}


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
let person = new Person('John', 30);
function Person(name, age) 
{
	this.name = name;
	this.age = age;
}
// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name, age)
{
    let person = 
    {
        name: name,
        age: age
    }
    return person;
}




