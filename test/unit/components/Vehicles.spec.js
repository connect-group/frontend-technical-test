import 'babel-polyfill';
import React from 'react';
import { config } from '../../../src/config';
import RestClient from '../../../src/lib/RestClient';
import { Vehicles } from '../../../src/components/Vehicles';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import 'sinon-as-promised';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

chai.use(sinonChai);

const fakeXE = { price: 100 };
const fakeVehicles = [
  {id: 'xe'},
  {id: 'xf'}
];

describe('<Vehicles />', () => {
  let target;

  beforeEach(function () {
    target = shallow(<Vehicles />);
  });

  afterEach(function () {
    target = null;
  });

  it('should return a function', sinon.test(function () {
    expect(typeof Vehicles).to.equal('function');
  }));

  context('when the constructor is called', () => {

    it('should set a rest client on the instance', sinon.test(function () {
      expect(target.instance().restClient).to.be.instanceOf(RestClient);
    }));

    it('should set the correct api url', sinon.test(function () {
      const { server, api } = config;
      const apiUrl = `${server.url}:${server.port}${api.baseRoute}${api.vehiclesRoute}`;

      expect(target.instance().apiUrl).to.equal(apiUrl);
    }));

    it('should set the correct default state', sinon.test(function () {
      expect(target.state()).to.deep.equal({
        vehicles: [],
        hasErrored: false,
        isLoading: true
      });
    }));

  });

  context('when the componentDidMount method is called', () => {

    it('should call the fetchData and fakeFetchVehicleData methods', sinon.test(function () {
      const fakeResponse = { body: { vehicles: [] }};
      const instance = target.instance();
      const fakeFetchData = this.stub(instance, 'fetchData').returns(Promise.resolve(fakeResponse));

      instance.componentDidMount();

      expect(fakeFetchData).to.have.been.called;
    }));

  });

  context('when the shouldComponentUpdate method is called', () => {

    it('should return false if isLoading and hasErrored have not changed', sinon.test(function () {
      const instance = target.instance();
      const fakeState = {
        isLoading: true,
        hasErrored: false
      };

      target.setState(fakeState);

      const response = instance.shouldComponentUpdate(null, fakeState);

      expect(response).to.equal(false);
    }));

    it('should return true if isLoading has changed', sinon.test(function () {
      const instance = target.instance();
      const fakeState = {
        isLoading: true,
        hasErrored: false
      };

      target.setState(fakeState);

      fakeState.isLoading = false;

      const response = instance.shouldComponentUpdate(null, fakeState);

      expect(response).to.equal(true);
    }));

    it('should return true if hasErrored has changed', sinon.test(function () {
      const instance = target.instance();
      const fakeState = {
        isLoading: true,
        hasErrored: false
      };

      target.setState(fakeState);

      fakeState.hasErrored = true;

      const response = instance.shouldComponentUpdate(null, fakeState);

      expect(response).to.equal(true);
    }));

  });

  context('when the fetchVehicleData method is called', () => {

    it('should call the fetchData method and set state based on the response', sinon.test(function (done) {
      const instance = target.instance();
      const fakeResponse = { body: fakeXE };
      this.stub(instance.restClient, 'get').returns(fakeResponse);
      const fakeFetchData = this.stub(instance, 'fetchData').returns(Promise.resolve(fakeXE));

      instance.fetchVehicleData(fakeVehicles).then(() => {
        const state = target.state();
        expect(fakeFetchData).to.have.been.calledTwice;
        expect(state.vehicles.length).to.equal(fakeVehicles.length);
        expect(state.vehicles[0]).to.equal(Object.assign(fakeVehicles[0], fakeXE));
        expect(state.vehicles[1]).to.equal(Object.assign(fakeVehicles[1], fakeXE));
        done();
      });
    }));

  });

  context('when the fetchData method is called', () => {

    it('should call the default api url if no id is supplied', sinon.test(function () {
      const instance = target.instance();
      const fakeResponse = { body: fakeXE };

      const fakeRestClient = this.stub(instance.restClient, 'get').returns(fakeResponse);

      instance.fetchData();

      expect(fakeRestClient).to.have.been.calledWith({ url: instance.apiUrl });
    }));

    it('should call a vehicle specific api url if an id is supplied', sinon.test(function () {
      const instance = target.instance();
      const fakeResponse = { body: fakeXE };

      const fakeRestClient = this.stub(instance.restClient, 'get').returns(fakeResponse);

      instance.fetchData('xe');

      expect(fakeRestClient).to.have.been.calledWith({ url: `${instance.apiUrl}/xe` });
    }));

    it('should return the correct response', sinon.test(async function () {
      const instance = target.instance();
      const fakeResponse = { body: fakeXE };

      this.stub(instance.restClient, 'get').returns(fakeResponse);

      const response = await instance.fetchData('xe');

      expect(response).to.equal(fakeResponse.body);
    }));

  });

  context('when the render method is called', () => {

    it('should return a <div>', sinon.test(function () {
      expect(target).to.have.length(1);
      expect(target.is('div')).to.be.true;
    }));

    it('should return <Loading /> if isLoading is true', sinon.test(function () {
      target.setState({
        isLoading: true
      });

      const LoadingComponent = target.find('Loading');

      expect(LoadingComponent).to.have.length(1);
    }));

    it('should return <ErrorMessage /> if isLoading is false and hasErrored is true', sinon.test(function () {
      const errorMessage = 'Please try again...';

      target.setState({
        isLoading: false,
        hasErrored: true,
        errorMessage
      });

      const ErrorMessageComponent = target.find('ErrorMessage');

      expect(ErrorMessageComponent).to.have.length(1);
      expect(ErrorMessageComponent.props().message).to.equal(errorMessage);
    }));

    it('should return <VehicleList /> if isLoading is false and hasErrored is false', sinon.test(function () {
      target.setState({
        isLoading: false,
        hasErrored: false
      });

      const VehicleListComponent = target.find('VehicleList');

      expect(VehicleListComponent).to.have.length(1);
      expect(VehicleListComponent.props().vehiclesData).to.equal(target.state().vehicles);
    }));

  });

});
