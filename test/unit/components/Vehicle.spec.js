import 'babel-polyfill';
import React from 'react';
import { config } from '../../../src/config';
import { Vehicle } from '../../../src/components/Vehicle';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import 'sinon-as-promised';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

chai.use(sinonChai);

const fakeVehicle = {
  id: 'xe',
  media: [{ url: '/fake/path' }],
  price: '£3,000,0000',
  description: 'fake description'
};

describe('<Vehicle />', () => {
  let target;

  beforeEach(function () {
    target = shallow(<Vehicle vehicleData={fakeVehicle} />);
  });

  afterEach(function () {
    target = null;
  });

  it('should return a function', sinon.test(function () {
    expect(typeof Vehicle).to.equal('function');
  }));

  it('should return a <section>', sinon.test(function () {
    expect(target).to.have.length(1);
    expect(target.is('section')).to.be.true;
  }));

  it('should return sibling <div> with correct classes', sinon.test(function () {
    const containers = target.find('> div');

    expect(containers).to.have.length(2);
    expect(containers.first().props().className).to.equal('c-vehicle-list-item-image');
    expect(containers.last().props().className).to.equal('c-vehicle-list-item-info');
  }));

  it('should return <img> with correct props', sinon.test(function () {
    const image = target.find('> div.c-vehicle-list-item-image img');

    expect(image).to.have.length(1);
    expect(image.props().src).to.equal(`${config.server.assetsPrefix}${fakeVehicle.media[0].url}`);
    expect(image.props().alt).to.equal(`Photo of a Jaguar ${fakeVehicle.id}`);
  }));

  it('should return <header> containing correct headings', sinon.test(function () {
    const header = target.find('> div.c-vehicle-list-item-info header');

    expect(header).to.have.length(1);

    const h1 = header.find('h1.c-vehicle-list-item-title');
    const h2 = header.find('h2.c-vehicle-list-item-subtitle');

    expect(h1).to.have.length(1);
    expect(h1.text()).to.equal(`Jaguar ${fakeVehicle.id}`);
    expect(h2).to.have.length(1);
    expect(h2.text()).to.equal(`From ${fakeVehicle.price}`);
  }));

  it('should return <p> containing vehicle description', sinon.test(function () {
    const paragraph = target.find('> div.c-vehicle-list-item-info p.c-vehicle-list-item-desc');

    expect(paragraph).to.have.length(1);
    expect(paragraph.text()).to.equal(fakeVehicle.description);
    expect(paragraph.props().title).to.equal(fakeVehicle.description);
  }));

});
