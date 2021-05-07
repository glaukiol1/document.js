import main from './normal.js';

function createDiv(childArrayText, childArrayType, parentId, newDivId) {
    if (!childArrayText || !childArrayType || !parentId || !newDivId) {
        throw Error('Looks like you missed / typed an incorrect param at the call for createDiv!');
    }
    const parent = document.getElementById(parentId);
    const newElement = document.createElement('div')
    newElement.id = newDivId;
    parent.appendChild(newElement);
    for (let i=0; i < childArrayText.length; i++) {
        let element = childArrayText[i];
        let elementType = childArrayType[i];
        main.addDOMElememtNoParams(newElement.id, elementType, element);
    }
}

export default {
    createDiv
}

// All of the modules are coded by @glaukiol1