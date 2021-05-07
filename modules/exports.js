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

const h1HeadingWithIDandClass = one.h1HeadingWithIDandClass;
const h1HeadingWithID = one.h1HeadingWithID;
const h1HeadingWithNoParams = one.h1HeadingWithNoParams;
const h1HeadingWithClass = one.h1HeadingWithClass;

const h2HeadingWithIDandClass = two.h2HeadingWithIDandClass;
const h2HeadingWithID = two.h2HeadingWithID;
const h2HeadingWithNoParams = two.h2HeadingWithNoParams;
const h2HeadingWithClass = two.h2HeadingWithClass;

const h3HeadingWithIDandClass = three.h3HeadingWithIDandClass;
const h3HeadingWithID = three.h3HeadingWithID;
const h3HeadingWithNoParams = three.h3HeadingWithNoParams;
const h3HeadingWithClass = three.h3HeadingWithClass;

const h4HeadingWithIDandClass = four.h4HeadingWithIDandClass;
const h4HeadingWithID = four.h4HeadingWithID;
const h4HeadingWithNoParams = four.h4HeadingWithNoParams;
const h4HeadingWithClass = four.h4HeadingWithClass;

const paragraphWithIDandClass = p.paragraphWithIDandClass;
const paragraphWithID = p.paragraphWithID;
const paragraphWithNoParams = p.paragraphNoParams;
const paragraphWithClass = p.paragraphWithClass;

export default {
    newElement: addDOMElememtNoParams,
    newElementWithId: addDOMElememtWithID,
    newElementWithClass: addDOMElememtWithClass,
    newElementWithClassAndId: addClass,
    h1WithIdAndClass: h1HeadingWithIDandClass,
    h1WithId: h1HeadingWithID,
    h1: h1HeadingWithNoParams,
    h1WithClass: h1HeadingWithClass,
    h2WithIdAndClass: h2HeadingWithIDandClass,
    h2WithId: h2HeadingWithID,
    h2: h2HeadingWithNoParams,
    h2WithClass: h2HeadingWithClass,
    h3WithIdAndClass: h3HeadingWithIDandClass,
    h3WithId: h3HeadingWithID,
    h3: h3HeadingWithNoParams,
    h3WithClass: h3HeadingWithClass,
    h4WithIdAndClass: h4HeadingWithIDandClass,
    h4WithId: h4HeadingWithID,
    h4: h4HeadingWithNoParams,
    h4WithClass: h4HeadingWithClass,
    pWithIdAndClass: paragraphWithIDandClass,
    pWithId: paragraphWithID,
    p: paragraphWithNoParams,
    pWithClass: paragraphWithClass,
    createDiv,
    addClass,
    addId,
}

// All of the modules are coded by @glaukiol1
