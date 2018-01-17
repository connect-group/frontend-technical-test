import superagent from 'superagent';
import RestClient from '../../../src/lib/RestClient';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('RestClient', () => {

  context('get', () => {

    it('should call http-utility get with url', sinon.test(function () {
      const fakeUrl = 'fake url';

      const mockRequest = {
        end(callback) {
          callback('done');
        }
      };

      this.stub(superagent, 'get', (url) => {
        expect(url).to.equal(fakeUrl);

        return mockRequest;
      });

      const target = new RestClient();

      const callbackSpy = this.spy();

      const result = target.get({
        url: fakeUrl
      }, callbackSpy);

      expect(callbackSpy.calledWith('done')).to.be.ok;
      expect(result).to.be.undefined;
    }));

    it('should call http-utility get with headers when headers exist', sinon.test(function () {
      const fakeUrl = 'fake url';
      const fakeHeaders = 'fake headers';
      const mockRequest = {
        set(headers) {
          expect(headers).to.equal(fakeHeaders);
        },
        end(callback) {
          callback('done');
        }
      };

      this.stub(superagent, 'get', (url) => {
        expect(url).to.equal(fakeUrl);

        return mockRequest;
      });

      const target = new RestClient();
      const callbackSpy = this.spy();

      target.get({
        url: fakeUrl,
        headers: fakeHeaders
      }, callbackSpy);

      expect(callbackSpy.calledWith('done')).to.be.ok;
    }));

    it('should call http-utility get with query when query string values exist', sinon.test(function () {

      const fakeUrl = 'fake url';
      const fakeQuery = {
        fakeQueryParam: 'fake-query-param'
      };
      const mockRequest = {
        query(query) {
          expect(query).to.equal(fakeQuery);
        },
        end(callback) {
          callback('done');
        }
      };

      this.stub(superagent, 'get', (url) => {
        expect(url).to.equal(fakeUrl);

        return mockRequest;
      });

      const target = new RestClient();
      const callbackSpy = this.spy();

      target.get({
        url: fakeUrl,
        query: fakeQuery
      }, callbackSpy);

      expect(callbackSpy.calledWith('done')).to.be.ok;
    }));

    it('should return the request when no callback was defined', sinon.test(function () {
      const fakeRequest = 'fake request';

      this.stub(superagent, 'get').returns(fakeRequest);

      const target = new RestClient()
      const result = target.get('anything');

      expect(result).to.equal(fakeRequest);
    }));

    it('should set a timeout when props.timeout exists', sinon.test(function () {
      const fakeUrl = 'fake/url';
      const fakeProps = {
        url: fakeUrl,
        timeout: 1
      };
      const fakeRequest = {
        timeout: this.spy(),
        end: () => {
        }
      };

      this.stub(superagent, 'get').returns(fakeRequest);

      const target = new RestClient();

      target.get(fakeProps);

      expect(fakeRequest.timeout).is.calledWith(fakeProps.timeout);
    }));

  });

});
