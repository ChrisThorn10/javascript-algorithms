"use strict";

function harmlessRansomeNote(noteText, magazineText) {
    var noteTextArray = noteText.split(" ");
    var magTextArray = magazineText.split(" ");
    var magazineObj = {};
    
    magTextArray.forEach(word => {
    if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
        });
    console.log(magazineObj);
    
    var noteIsPossible = true;
    for(var element of noteTextArray) {
        if (!magazineObj[element] || magazineObj[element]==0){
            console.log(element + " was not found.");
            noteIsPossible = false;
            break;    
        } else{
            magazineObj[element]--;
            console.log(element + " was found!");
        }
    };
    
    return noteIsPossible;
}

var response = harmlessRansomeNote("hello its me are you looking", "hello its me and are you available or searching for me its great to see you for now");

console.log(response);

