//section 11: EVENTS in JavaScript

//HTML events are "things" that happen to html elements.
//When JavaScript is used in HTML pages, JAvaScript can "react" on these events.

// ➡️ HTML Events:
// An HTML event can be something the browser does, or something a user does.
// Here are some examples of HTML events:

// 1) An HTML web page has finished loading
// 2) An HTML input field was changed
// 3) An HTML button was clicked
// 4) often, when events happen, you may want to do something.

//JavaScript lets you execute code when events are detected.
//HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// section 1️⃣ 4 ways of writing Events in JavaScript.

// 1: using inline events alert();
// 2: By calling a function (We already seen and most common way of writting)
// 3: using Inline Events (HTML onclick=" " property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

//check the Events HTML file

//section 2️⃣ What is Event Object?

// Event object is the parent object of the event object.
// for Example
// MouseEvent, focusEvent, KeyboardEvent etc

// section 3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML document belongs to the MouseEvent Object.


// section 4️⃣ KeyboardEvent in JavaScript
// Events that occur when user presses a key on the keyboard,
// belongs to the KeyboardEvent Object.
//https://www.w3schools.com/jsref/obj_keyboardevent.asp


// section 5️⃣ InputEvent in JavaScript
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.


// ➡️ Timing Based Events in JavaScript.

// These time intervals are called timing events.
// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

// 1: setTimeout()
// 2: setInterval()
// 3: clearTimeout()
// 4: clearInterval()
