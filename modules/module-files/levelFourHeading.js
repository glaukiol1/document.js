import main from './normal.js';

function h4HeadingWithIDandClass(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement || !elementID || !elementClass) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h4HeadingWithID!')
    }
    main.addDOMElememtWithClassAndID(parentId, 'h4', innerHTMLElement, elementClass, elementID);
}

function h4HeadingWithID(parentId, innerHTMLElement, elementID) {
    if (!parentId || !innerHTMLElement || !elementID) {
        throw Error('Looks like you missed a paramenter / or submitted an incorrect one, at the call for h4HeadingWithID!')
    }
    main.addDOMElememtWithID(parentId, 'h4', innerHTMLElement, elementID);
}

function h4HeadingWithNoParams(parentId, innerHTMLElement) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h4HeadingWithNoParams.')
    }
    main.addDOMElememtNoParams(parentId, 'h4', innerHTMLElement);
}

function h4HeadingWithClass(parentId, innerHTMLElement, elementClass) {
    if (!parentId || !innerHTMLElement || !elementClass) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h4HeadingWithClass.')
    }
    main.addDOMElememtWithClass(parentId, 'h4', innerHTMLElement, elementClass);
}

export default {
    h4HeadingWithIDandClass,
    h4HeadingWithID,
    h4HeadingWithNoParams,
    h4HeadingWithClass
}
// All of the modules are coded by @glaukiol_