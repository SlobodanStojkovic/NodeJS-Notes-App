//const fs = require("fs");

//fs.writeFileSync("notes.txt", "My name is Slobodan Stojkovic.");  //to create a file named notes.txt and put text in it (second argument)
//fs.appendFileSync("notes.txt", " This is appended text.")   //to append text to a file

const getNotes = require("./notes");

const msg = getNotes();

console.log(msg);
