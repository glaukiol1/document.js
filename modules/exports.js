import main from './module-files/normal.js';
import one from './module-files/levelOneHeading.js';
import two from './module-files/levelTwoHeading.js';
import three from './module-files/levelThreeHeading.js';
import four from './module-files/levelFourHeading.js';
import p from './module-files/paragraph.js';
import div from './module-files/div.js';
import addClassId from './module-files/add-id-class.js';

const addClass = addClassId.addClass;
const addId = addClassId.addId;

const createDiv = div.createDiv;

const addDOMElememtNoParams = main.addDOMElememtNoParams;
const addDOMElememtWithID = main.addDOMElememtWithID;
const addDOMElememtWithClass = main.addDOMElememtWithClass;
const addDOMElememtWithIdAndClass = main.addDOMElememtWithIdAndClass;

const h1 = one.h1;

const h2 = two.h2;

const h3 = three.h3;

const h4 = four.h4;

const paragraphWithIDandClass = p.paragraphWithIDandClass;
const paragraphWithID = p.paragraphWithID;
const paragraphWithNoParams = p.paragraphNoParams;
const paragraphWithClass = p.paragraphWithClass;

export default {
    newElement: addDOMElememtNoParams,
    newElementWithId: addDOMElememtWithID,
    newElementWithClass: addDOMElememtWithClass,
    newElementWithIdAndClass: addDOMElememtWithIdAndClass,
    h1,
    h2,
    h3,
    h4,
    pWithIdAndClass: paragraphWithIDandClass,
    pWithId: paragraphWithID,
    p: paragraphWithNoParams,
    pWithClass:paragraphWithClass,
    createDiv,
    addClass,
    addId,
}

// All of the modules are coded by @glaukiol1
