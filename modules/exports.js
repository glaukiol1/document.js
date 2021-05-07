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
const addDOMElememtWithClassAndID = main.addDOMElememtWithClassAndID;

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
    addDOMElememtNoParams,
    addDOMElememtWithID,
    addDOMElememtWithClass,
    addDOMElememtWithClassAndID,
    h1HeadingWithIDandClass,
    h1HeadingWithID,
    h1HeadingWithNoParams,
    h1HeadingWithClass,
    h2HeadingWithIDandClass,
    h2HeadingWithID,
    h2HeadingWithNoParams,
    h2HeadingWithClass,
    h3HeadingWithIDandClass,
    h3HeadingWithID,
    h3HeadingWithNoParams,
    h3HeadingWithClass,
    h4HeadingWithIDandClass,
    h4HeadingWithID,
    h4HeadingWithNoParams,
    h4HeadingWithClass,
    paragraphWithIDandClass,
    paragraphWithID,
    paragraphWithNoParams,
    paragraphWithClass,
    createDiv,
    addClass,
    addId,
}

// All of the modules are coded by @glaukiol_
