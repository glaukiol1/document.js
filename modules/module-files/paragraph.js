import main from './normal.js';


function paragraphWithIDandClass(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement || !elementID || !elementClass) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h1HeadingWithID!')
    }
    main.addDOMElememtWithClassAndID(parentId, 'p', innerHTMLElement, elementClass, elementID);
}

function paragraphWithID(parentId, innerHTMLElement, elementID) {
    if (!parentId || !innerHTMLElement || !elementID) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h1HeadingWithID!')
    }
    main.addDOMElememtWithID(parentId, 'p', innerHTMLElement, elementID);
}

function paragraphNoParams(parentId, innerHTMLElement) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h1HeadingWithNoParams.')
    }
    main.addDOMElememtNoParams(parentId, 'p', innerHTMLElement);
}

function paragraphWithClass(parentId, innerHTMLElement, elementClass) {
    if (!parentId || !innerHTMLElement || !elementClass) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h1HeadingWithClass.')
    }
    main.addDOMElememtWithClass(parentId, 'p', innerHTMLElement, elementClass);
}

export default {
    paragraphWithIDandClass,
    paragraphWithID,
    paragraphNoParams,
    paragraphWithClass
}
// All of the modules are coded by @glaukiol_