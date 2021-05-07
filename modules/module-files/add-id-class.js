import main from './normal.js';

function addClass(elementId, elementClass) {const element=document.getElementById(elementId); element.className=elementClass};
function addId(elementId, elementClass) {const element=document.getElementsByClassName(elementClass)[0]; element.id=elementId};

export default {
    addClass,
    addId
}