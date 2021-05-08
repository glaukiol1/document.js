import main from './normal.js';

function h3HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement || !elementID || !elementClass) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h3HeadingWithID!')
    }
    main.addDOMElememtWithIdAndClass(parentId, 'h3', innerHTMLElement, elementID, elementClass);
}

function h3HeadingWithID(parentId, innerHTMLElement, elementID) {
    if (!parentId || !innerHTMLElement || !elementID) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h3HeadingWithID!')
    }
    main.addDOMElememtWithID(parentId, 'h3', innerHTMLElement, elementID);
}

function h3HeadingWithNoParams(parentId, innerHTMLElement) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h3HeadingWithNoParams.')
    }
    main.addDOMElememtNoParams(parentId, 'h3', innerHTMLElement);
}

function h3HeadingWithClass(parentId, innerHTMLElement, elementClass) {
    if (!parentId || !innerHTMLElement || !elementClass) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h3HeadingWithClass.')
    }
    main.addDOMElememtWithClass(parentId, 'h3', innerHTMLElement, elementClass);
}

function h3(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h3.')
    }
    if(elementID && !elementClass) {
        h3HeadingWithID(parentId, innerHTMLElement, elementID)
    } else if (elementID && elementClass) {
        h3HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass)
    } else if (!elementID && elementClass) {
        h3HeadingWithClass(parentId,innerHTMLElement,elementClass)
    } else if (!elementID && !elementClass) {
        h3HeadingWithNoParams(parentId, innerHTMLElement)
    }
}


export default {
    h3
}
// All of the modules are coded by @glaukiol1