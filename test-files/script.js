import module from '../modules/exports.js';


document.getElementById('show').addEventListener('click', () => {
    module.addDOMElememtNoParams('btn-show', 'h2', 'Test 1');
    module.h1HeadingWithNoParams('btn-show', 'Test Two')
    module.h1HeadingWithID('btn-show', 'Test 3', 'first-h1-id')
    module.h1HeadingWithIDandClass('btn-show', 'Test 4', 'this-is-a-id', 'this-is-a-class')
    module.createDiv(['Glaukio', 'Codes'], ['h1', 'h2'], 'btn-show', 'this-is-another-id');
});

// const example = ['h1', 'h2', 'h3']

// for(let i = 0; i < example.length; i++) {
//     const inArray = example[i];
//     console.log(inArray);
// }

// You can write more code to test if you would like