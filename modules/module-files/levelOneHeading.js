import main from './normal.js';

function h1HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement || !elementID || !elementClass) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h1HeadingWithID!')
    }
    main.addDOMElememtWithIdAndClass(parentId, 'h1', innerHTMLElement, elementID, elementClass);
}

function h1HeadingWithID(parentId, innerHTMLElement, elementID) {
    if (!parentId || !innerHTMLElement || !elementID) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h1HeadingWithID!')
    }
    main.addDOMElememtWithID(parentId, 'h1', innerHTMLElement, elementID);
}

function h1HeadingWithNoParams(parentId, innerHTMLElement) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h1HeadingWithNoParams.')
    }
    main.addDOMElememtNoParams(parentId, 'h1', innerHTMLElement);
}

function h1HeadingWithClass(parentId, innerHTMLElement, elementClass) {
    if (!parentId || !innerHTMLElement || !elementClass) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h1HeadingWithClass.')
    }
    main.addDOMElememtWithClass(parentId, 'h1', innerHTMLElement, elementClass);
}

function h1(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h1.')
    }
    if(elementID && !elementClass) {
        h1HeadingWithID(parentId, innerHTMLElement, elementID)
    } else if (elementID && elementClass) {
        h1HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass)
    } else if (!elementID && elementClass) {
        h1HeadingWithClass(parentId,innerHTMLElement,elementClass)
    } else if (!elementID && !elementClass) {
        h1HeadingWithNoParams(parentId, innerHTMLElement)
    }
}

export default {
    h1
}
// All of the modules are coded by @glaukiol1