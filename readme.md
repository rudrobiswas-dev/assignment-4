# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
Ans-getElementById() getElementsByClassName() and querySelector  querySelectorAll()
are used to select elements from the DOM but they work differently getElementById() selects one element by its unique id getElementsByClassName() 
selects all elements that have the same class name and returns a collection
querySelector returns the first element that matches a CSS selector and querySelectorAll returns all elements that match the selector
So the main difference is how many elements they return and how we select them.

# How do you create and insert a new element into the DOM?
Ans-To create and insert a new element into the DOM we first use document.createElement() to create the element
then we can add text or attributes to it after that we use methods like appendChild() or append() to 
insert it into a parent element in the DOM for example we create a new div add some text inside it and then append it to the body or another element
So basically 
first we create the element then we add content and finally we insert it into the webpage.

# What is Event Bubbling? And how does it work?
Ans-Event Bubbling is a process where an event starts from the target element and then moves up to its parent elements
for example if we click a button inside a div the click event first happens on the button then on the div then on the body
this happens automatically in JavaScript unless we stop it 
the event “bubbles up” from child to parent.

# What is Event Delegation in JavaScript? Why is it useful?
Ans-Event delegation is a technique where we add an event listener to a parent element instead of adding it to many child elements 
because of event bubbling the parent can detect events from its children it is useful because it improves performance
reduces code and also works for dynamically added elements
so instead of adding many event listeners, we can handle everything with one listener on the parent.

# What is the difference between preventDefault() and stopPropagation() methods?
Ans-preventDefault() is used to stop the default action of an element for example it can stop a form from submitting 
stop a link from opening on the other hand stopPropagation is used to stop the event from bubbling up to parent elements preventDefault() stops 
the default behavior stopPropagation() stops the event movement the DOM.