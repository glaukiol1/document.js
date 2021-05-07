import main from './normal.js';

function h3HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement || !elementID || !elementClass) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h3HeadingWithID!')
    }
    main.addDOMElememtWithClassAndID(parentId, 'h3', innerHTMLElement, elementClass, elementID);
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

export default {
    h3HeadingWithIDandClass,
    h3HeadingWithID,
    h3HeadingWithNoParams,
    h3HeadingWithClass
}
// All of the modules are coded by @glaukiol1