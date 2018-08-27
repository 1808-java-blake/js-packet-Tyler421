// PART II
// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.

// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() 
{
    for (let tags of document.getElementsByTagName('*')) 
    {
        if (tags.textContent === "USA") 
        {
            console.log(tags.innerHTML);
        }
    }
}


// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() 
{
    for (let tags of document.getElementsByTagName('tr'))
    {
        if (tags.textContent.includes('Sales')) 
        {
            for (let i of tags.getElementsByClassName('empName'))
            {
                console.log(i.innerHTML);
            }
        } 
    }
}


// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() 
{
    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) 
    {
        let as = a[i].getElementsByTagName('span');
        for (let j = 0; j < as.length; j++)
        {
            console.log(as[j].textContent);
        }
    }

}


// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
  
function getHobbies()
{
    for (let hobbies of document.getElementsByName('hobbies'))
     {
        for (let options of hobbies.getElementsByTagName('option')) 
        {
            console.log(`Value: ${options.value}, Contents: ${options.textContent}`);
        }
    }
}
getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute()
{
    let attributes = document.querySelectorAll('[data-customAttr]');
    for (let i = 0; i <attributes.length;i++)
    {
        console.log(attributes[i].dataset.customattr);
    }

}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
document.addEventListener('event', function()
{
    document.getElementById('num1').onchange=changeEventHandler;
})

document.addEventListener('event', function() 
{
    document.getElementById('num2').onchange=changeEventHandler;
})

function changeEventHandler(event) {
    
    let num1Value = document.getElementById('num1').value;
    let num2Value = document.getElementById('num2').value;
    let sum = document.getElementById('sum');
    
    if (!(+num1Value + +num2Value)) 
    {
        sum.innerHTML = "Cannot add";
    } 
    
    else 
    {
        sum.innerHTML = +num1Value + +num2Value;
    }
}



// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let actionSkillChange = document.getElementsByName("skills")[0];
actionSkillChange.addEventListener("change", function(){alert(`Are you sure ${this.value} is one of your skills?`);
});

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let colors = document.getElementsByName('favoriteColor');

let previousColor = null;
for (let i of colors) 
{
    i.onclick = function() 
    {
        if (!previousColor) 
        {
            previousColor = this.value;
            changeColor();
        }
        if (previousColor && this.value !== previousColor) 
        {
            alert(`So you like ${this.value} more than ${previousColor} now?`);
            previousColor = this.value;
            changeColor();
        }
    };
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
function showHideEvent() 
{
    let names = document.getElementsByClassName('empName');
    for (let i = 0; i < names.length; i++) 
    {
        console.log()
        names[i].addEventListener('mouseover', () => {

            if (names[i].style.opacity == 100) 
            {
                names[i].style.opacity = 0;
            }
            else 
            {
                names[i].style.opacity = 100;
            }
        })

    }
}
showHideEvent();
// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
let s = setInterval(getTime,200);
function getTime()
{
	let displayCurrentTime = document.getElementById("currentTime");
	let current = new Date();
	hours = current.getHours();
	minutes = current.getMinutes();
	seconds = current.getSeconds();
    if(minutes < 10)
    {
		minutes ="0" + minutes;
	}
    else if(seconds< 10)
    {
		seconds = "0" + seconds;
	}
		displayCurrentTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

let hello = document.getElementById('helloWorld');
hello.addEventListener('click', function() {
    setTimeout(()=> {
        hello.style.color = randomColor();
    }, 3000);
});

function randomColor() 
{
    randomColors = ['yellow','orange','purple','red','green','blue'];
    let number = Math.floor(Math.random() * Math.floor(6));
    let chosenColor = randomColors[number];
    return chosenColor;
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function walkTheDOM(node, func)
{    
    for(let i = 0; i < node.childNodes.length; i++)
    {
    
        func(node.childNodes[i], func);
    }
}
walkTheDOM(document, walkTheDOM);