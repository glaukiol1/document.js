function addClass(element, ...elementClasses) {
    if (element instanceof Element) {
        for(let i=0;i<elementClasses.length;i++) {
            element.classList.add(elementClasses[i])
        }
    } else if (typeof element === 'string') {
        const elemenT=document.getElementById(element);
        for(let i=0;i<elementClasses.length;i++) {
            elemenT.classList.add(elementClasses[i])
        }
    } else {
        throw Error("`element` is not instanceOf <Element || String> ")
    }
};
function addId(element, elementId) {
    if (element instanceof Element) {
        element.id=elementId
    } else {
        throw Error("`element` is not instanceOf <Element> ")
    }
};

export default {
    addClass,
    addId
}