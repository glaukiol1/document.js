
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
    if (!parentId || !typeOfElement || !innerHTMLElement || !elementId || !elementClass) {
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

function newElement(parentId, innerHTMLElement, elementID, elementClass) {
    if (!parentId || !innerHTMLElement) {
        throw Error('Looks like you missed / typed an incorrect parameter at the call for h2.')
    }
    if(elementID && !elementClass) {
        addDOMElememtWithID(parentId, innerHTMLElement, elementID)
    } else if (elementID && elementClass) {
        addDOMElememtWithIdAndClass(parentId, innerHTMLElement, elementID, elementClass)
    } else if (!elementID && elementClass) {
        addDOMElememtWithClass(parentId,innerHTMLElement,elementClass)
    } else if (!elementID && !elementClass) {
        addDOMElememtNoParams(parentId, innerHTMLElement)
    }
}

export default {
    newElement
}
// All of the modules are coded by @glaukiol1