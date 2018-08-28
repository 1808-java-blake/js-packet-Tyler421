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
    let result = document.querySelector('[data-customAttr="USA"] + span');
    console.log(result.innerText);
}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales()
{
	let p = document.getElementsByTagName("td");

    for(let i=0;i<p.length;i++)
    {
        if((p[i].innerHTML) == "Sales")
        {
  			console.log(p[i-1].innerHTML);
  		}
	}

};

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren()
 {
    let allAElements = document.getElementsByTagName('a');
    for (let i = 0; i < allAElements.length; i++)
    {
        let allSpanElements = allAElements[i].getElementsByTagName('span');
        for (let j = 0; j < allSpanElements.length; j++)
        {
            console.log(allSpanElements[j].textContent);
        }
    }
}


// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies()
{
    let hobbies = document.querySelectorAll('select[name=skills] > option')
    for (i = 0; i < hobbies.length; i++) 
    {
      if (hobbies[i].selected)
        {
            console.log(hobbies[i].value)
            console.log(hobbies[i].innerText)
        }
    }
  }


// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute()
{
    let tags = document.getElementsByTagName("*");

    for(let i=0; i<tags.length; i++)
    {
        if(tags[i].hasAttribute("data-customAttr"))
        {
            console.log('Value: ' + tags[i].getAttribute("data-customAttr"));
            console.log('Contents: ' + tags[i].innerHTML);
        }
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



// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let skill = document.getElementsByName('skills');
for (let i of skill) 
{
    i.addEventListener('change', function() 
    {
        alert('Are you sure ' + this.value + ' is one of your skills?');
    });
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor



// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

let employeeNames = document.getElementsByClassName('empName');
for (let i of employeeNames) 
{
    i.addEventListener('mouseover', function() 
    {
        if (this.style.opacity === '0') 
        {
            this.style.opacity  = 1;
        } else 
        {
            this.style.opacity  = 0; 
        }
    });
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

setInterval(function()
{
    let time = document.getElementById("currentTime");
    let date = new Date;
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    if(hours>12)
    {
        time.innerText = hours%12 + ':' + minutes + ':' + seconds + ' PM';
    }
    else
    {
        time.innerText = hours%12 + ':' + minutes + ':' + seconds + ' AM';
    }
}, 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
helloWorldDelay = document.getElementById('helloWorld');
helloWorldDelay.addEventListener('click', function(event)
{
    event.preventDefault();
    setTimeout(function()
    {
        helloWorldDelay.style.color = getRandomColor();
    },  3000);
});


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) 
    {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func)
{
    for(let n in node.childNodes)
    {
        func(node.childNodes[n], func);
    }
}