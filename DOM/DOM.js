//Section-10: Document object model in javascript.

// window is the main container or we can say the global Object 
// and any operations related to entire browser window can be a
// part of window object.

//for exp: the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of window object.

// 2️⃣ All the members like objects, methods or properties.
// if they are the part of window object then we do not refer the window object.
// Since window is the global object so you do not have to write down window.
// - it will be figured out by the runtime. 

// 3️⃣ Navigation throught the DOM

// 1: document.documentElement.
    // returns the element that is the root element of the document.
// 2: document.head.
// 3: document.body.
// 4: document.body.childNodes (include tab, enter, whiteSpace)
    // list of the direct children only
// 5: document.children (with out text nodes, only regular Elements)
// 6: document.childNodes.length
// 7: document.body.haschildNode
// 8: document.body.firstChild
// 9: document.body.firstElementChild
// 10: document.body.lastChild
// 11: document.body.lastElementChild

// 12: document.body.firstElementChild.firstElementChild
// 13: document.querySelector(".child-two")// return the 1st match value.
// 14: document.querySelectorAll(".child-two")
// 15: document.body.parentNode
// 15: document.body.parentElement
// 16: document.body.nextSibling
// 16: document.body.nextElementSibling

// 17: document.body.previousSibling
// 18: document.body.previousElementSibling