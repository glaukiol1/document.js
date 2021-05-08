import main from './normal.js';


function paragraphWithIDandClass(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement || !elementID || !elementClass) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h1WithID!')
    }
    main.addDOMElememtWithIdAndClass(parentId, 'p', innerHTMLElement, elementID, elementClass);
}

function paragraphWithID(parentId, innerHTMLElement, elementID) {
    if (!parentId || !innerHTMLElement || !elementID) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h1WithID!')
    }
    main.addDOMElememtWithID(parentId, 'p', innerHTMLElement, elementID);
}

function paragraphNoParams(parentId, innerHTMLElement) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h1WithNoParams.')
    }
    main.addDOMElememtNoParams(parentId, 'p', innerHTMLElement);
}

function paragraphWithClass(parentId, innerHTMLElement, elementClass) {
    if (!parentId || !innerHTMLElement || !elementClass) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h1WithClass.')
    }
    main.addDOMElememtWithClass(parentId, 'p', innerHTMLElement, elementClass);
}

function p(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for paragraph.')
    }
    if(elementID && !elementClass) {
        paragraphWithID(parentId, innerHTMLElement, elementID)
    } else if (elementID && elementClass) {
        paragraphWithIDandClass(parentId, innerHTMLElement, elementID, elementClass)
    } else if (!elementID && elementClass) {
        paragraphWithClass(parentId,innerHTMLElement,elementClass)
    } else if (!elementID && !elementClass) {
        paragraphNoParams(parentId, innerHTMLElement)
    }
}

export default {
    p
}
// All of the modules are coded by @glaukiol1