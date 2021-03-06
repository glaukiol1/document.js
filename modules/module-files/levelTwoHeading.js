import main from './normal.js';

function h2HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement || !elementID || !elementClass) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h2HeadingWithID!')
    }
    main.addDOMElememtWithIdAndClass(parentId, 'h2', innerHTMLElement, elementID, elementClass);
}

function h2HeadingWithID(parentId, innerHTMLElement, elementID) {
    if (!parentId || !innerHTMLElement || !elementID) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h2HeadingWithID!')
    }
    main.addDOMElememtWithID(parentId, 'h2', innerHTMLElement, elementID);
}

function h2HeadingWithNoParams(parentId, innerHTMLElement) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h2HeadingWithNoParams.')
    }
    main.addDOMElememtNoParams(parentId, 'h2', innerHTMLElement);
}

function h2HeadingWithClass(parentId, innerHTMLElement, elementClass) {
    if (!parentId || !innerHTMLElement || !elementClass) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h2HeadingWithClass.')
    }
    main.addDOMElememtWithClass(parentId, 'h2', innerHTMLElement, elementClass);
}

function h2(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h2.')
    }
    if(elementID && !elementClass) {
        h2HeadingWithID(parentId, innerHTMLElement, elementID)
    } else if (elementID && elementClass) {
        h2HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass)
    } else if (!elementID && elementClass) {
        h2HeadingWithClass(parentId,innerHTMLElement,elementClass)
    } else if (!elementID && !elementClass) {
        h2HeadingWithNoParams(parentId, innerHTMLElement)
    }
}

export default {
    h2
}
// All of the modules are coded by @glaukiol1