import 'babel-polyfill';
import React from 'react';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';
import VehicleList from "../src/components/VehicleList/VehicleList";

chai.use(sinonChai);

const VehicleListMocked = [
  {id: 'fspace'},
  {id: 'ftype'}
];

describe('<VehicleList />', () => {
  let target;

  beforeEach(function () {
    target = shallow(<VehicleList vehiclesData={fakeVehicleList} />);
  });

  afterEach(function () {
    target = null;
  });

  it('should return a function', sinon.test(function () {
    expect(typeof VehicleList).to.equal('function');
  }));

  context('when vehicle data is supplied', () => {

    it('should return a <div>', sinon.test(function () {
      expect(target).to.have.length(1);
      expect(target.is('div')).to.be.true;
    }));

    it('should return <ul> with class of c-list--unstyled', sinon.test(function () {
      const ListComponent = target.find('> ul.c-list--unstyled');

      expect(ListComponent).to.have.length(1);
    }));

    it('should return correct number of <li> based on array supplied', sinon.test(function () {
      const listItems = target.find('ul.c-list--unstyled > li.c-vehicle-list-item');

      expect(listItems).to.have.length(fakeVehicleList.length);
    }));

    it('should return correct number of <Vehicle> with correct props', sinon.test(function () {
      const vehicleComponents = target.find('li.c-vehicle-list-item > Vehicle');

      expect(vehicleComponents).to.have.length(fakeVehicleList.length);
      vehicleComponents.forEach((item, index) => {
        expect(item.props().vehicleData).to.equal(fakeVehicleList[index]);
      });
    }));

  });

  context('when no vehicle data is supplied', () => {

    it('should return <p> with correct message', sinon.test(function () {
      const altTarget = shallow(<VehicleList />);
      const noResults = altTarget.find('> ErrorMessage');

      expect(noResults).to.have.length(1);
      expect(noResults.props().message).to.equal('No vehicles found');
    }));

  });

});
