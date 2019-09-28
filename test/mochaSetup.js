/**
 * Created by brett.hadley on 10/10/2016.
 */

import chai from "chai";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from "chai-enzyme";
import jsdom from 'jsdom';

const JSDOM = jsdom.JSDOM;
const exposedProperties = ['window', 'navigator', 'document'];
const dom = new JSDOM('', {
    url: "http://localhost"
});

global.window = dom.window;
global.document = dom.window.document;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};


configure({adapter: new Adapter()});
chai.use(chaiEnzyme);

