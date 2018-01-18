import 'babel-polyfill';
import React from 'react';
import { Loading } from '../../../src/components/Loading';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

chai.use(sinonChai);

describe('<Loading />', () => {
  let target;

  beforeEach(function () {
    target = shallow(<Loading />);
  });

  afterEach(function () {
    target = null;
  });

  it('should return a function', sinon.test(function () {
    expect(typeof Loading).to.equal('function');
  }));

  it('should return a <p>', sinon.test(function () {
    expect(target).to.have.length(1);
    expect(target.is('p')).to.be.true;
    expect(target.text()).to.equal('Loading...');
  }));

});
