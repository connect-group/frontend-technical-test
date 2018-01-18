import 'babel-polyfill';
import React from 'react';
import { ErrorMessage } from '../../../src/components/ErrorMessage';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import 'sinon-as-promised';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';

chai.use(sinonChai);

describe('<ErrorMessage />', () => {
  let target;
  const fakeErrorMessage = 'Fake message here';

  beforeEach(function () {
    target = shallow(<ErrorMessage message={fakeErrorMessage} />);
  });

  afterEach(function () {
    target = null;
  });

  it('should return a function', sinon.test(function () {
    expect(typeof ErrorMessage).to.equal('function');
  }));

  it('should return a <p>', sinon.test(function () {
    expect(target).to.have.length(1);
    expect(target.is('p')).to.be.true;
    expect(target.text()).to.equal(fakeErrorMessage);
  }));

});
