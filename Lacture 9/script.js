console.log(document.body);
console.log(document.documentElement);
console.log(document.head);


console.log(document.body.childNodes);
console.log(document.body.childNodes[1])
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.childNodes[3]);
console.log(document.body.lastElementChild);


console.log(document.body.firstElementChild.children[3].nextElementSibling)

// The parent is available as parent node
alert(document.documentElement.parentNode); //document
alert(document.documentElement.parentElement) //null


// Quick Quiz
// Print typeof document and type of window in console & see what its print

console.log(typeof document, typeof window)  //its Print object object




