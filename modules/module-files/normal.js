function addDOMElememtNoParams(parentId, typeOfElement, innerHTMLElement) {
    if (!parentId || !typeOfElement || !innerHTMLElement) {
        throw Error('Looks like you missed a parementer / or gave an incorrect paramater/s at the call for addDOMElememtNoParams')
    }
    const parent = document.getElementById(parentId);
    const newElement = document.createElement(typeOfElement);
    newElement.innerHTML = innerHTMLElement;
    parent.appendChild(newElement);
}

function addDOMElememtWithID(parentId, typeOfElement, innerHTMLElement, elementId) {
    if (!parentId || !typeOfElement || !innerHTMLElement || !elementId) {
        throw Error('Looks like you missed a parementer / or gave an incorrect paramater/s at the call for addDOMElememtWithID')
    }
    const parent = document.getElementById(parentId);
    const newElement = document.createElement(typeOfElement);
    newElement.innerHTML = innerHTMLElement;
    newElement.id = elementId;
    parent.appendChild(newElement);
}

function addDOMElememtWithClass(parentId, typeOfElement, innerHTMLElement, elementClass) {
    if (!parentId || !typeOfElement || !innerHTMLElement || !elementClass) {
        throw Error('Looks like you missed a parementer / or gave an incorrect paramater/s at the call for addDOMElememtWithClass');
    }
    const parent = document.getElementById(parentId);
    const newElement = document.createElement(typeOfElement);
    newElement.innerHTML = innerHTMLElement;
    newElement.className = elementClass;
    parent.appendChild(newElement);
}

function addDOMElememtWithIdAndClass(parentId, typeOfElement, innerHTMLElement, elementId, elementClass) {
    const parent = document.getElementById(parentId);
    const newElement = document.createElement(typeOfElement);
    newElement.innerHTML = innerHTMLElement;
    newElement.className = elementClass;
    newElement.id = elementId;
    parent.appendChild(newElement);
}

function newElement(parentId, elementType, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for newElement.')
    }
    if(elementID && !elementClass) {
        addDOMElememtWithID(parentId, elementType, innerHTMLElement, elementID)
    } else if (elementID && elementClass) {
        addDOMElememtWithIdAndClass(parentId, elementType, innerHTMLElement, elementID, elementClass)
    } else if (!elementID && elementClass) {
        addDOMElememtWithClass(parentId, elementType, innerHTMLElement,elementClass)
    } else if (!elementID && !elementClass) {
        addDOMElememtNoParams(parentId, elementType, innerHTMLElement)
    }
}

export default {
    addDOMElememtNoParams,
    addDOMElememtWithID,
    addDOMElememtWithClass,
    addDOMElememtWithIdAndClass,
    newElement
}
// All of the modules are coded by @glaukiol1