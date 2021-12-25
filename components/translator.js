const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const punctuation = /[,.?!]/;
const capital = /[A-Z]/;
const time = /\d{1,2}:\d\d/g;
const honorific = /\b[mdp][rsx][os]?[f]?\.?(?=\s)/;

// TODO: complete translator logic
// must handle time and honorifics correctly 
// wrap translated items in .highlight span
// <span class='.highlight'> ... </span>

// TODO: handle case - no translation required

// why a class? write properties and methods to be used in translation
class Translator {

readText(text, loc) {
    let locale = britishOnly;
    if (loc = 'american-to-british') locale = americanOnly;
    let translated = [];
    // keep track of changes, to handle "looks good to me" case
    let changes = 0;
    
    let parsed = text.split(' ');
    console.log(parsed);
    // if (loc = 'british-to-american') console.log(britishOnly);
    parsed.forEach((e, i, a) => {
        console.log(e.toLowerCase());
        console.log(americanOnly[e.toLowerCase()]);
    

    // start cursor at 1
    // read in 3 words, then 2, then 1
    // if 3 word match found, move cursor ahead three
    // if 2 word match found, move cursor ahead 2

    // when checking 1 word particles, perform all checks including capitalisation, times, honorifics, spelling
    
        // honor original capitalisation
        // regex /[A-Z]
        
        // treat times
        // regex /\d{1,2}:\d\d/g
        
        // treat honorifics
        // regex /\b[mdp][rsx][os]?[f]?\.?(?=\s)/ 
        // if locale = american, replace '' with ''
        
        // translate/alter spelling where needed
    
    });
}



}

module.exports = Translator;