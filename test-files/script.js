import documentjs from '../modules/exports.js';


document.getElementById('show').addEventListener('click', () => {
    documentjs.newElement('btn-show', 'h2', 'Test 1');
    documentjs.h1('btn-show', 'Test Two')
    documentjs.h1('btn-show', 'Test 3', 'first-h1-id')
    documentjs.h1('btn-show', 'Test 4', 'this-is-a-id', 'this-is-a-class')
    documentjs.h2('btn-show', 'Test 5', 'this-is-another-id2a', 'this-is-a-class')
    documentjs.createDiv(['Glaukio', 'Codes'], ['h1', 'h2'], 'btn-show', 'this-is-another-id');
});

// const example = ['h1', 'h2', 'h3']

// for(let i = 0; i < example.length; i++) {
//     const inArray = example[i];
//     console.log(inArray);
// }

// You can write more code to test if you would like
