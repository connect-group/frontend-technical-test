import superagent from 'superagent';

class RestClient {

  get(props, callback) {
    let request = superagent.get(props.url);
    this._setProps(props, request);

    return this._callbackOrPromise(request, callback);
  }

  _callbackOrPromise(request, callback) {
    if (callback) {
      request.end(callback);
    } else {
      return request;
    }
  }

  _setProps(props, request) {
    if (props.headers) {
      request.set(props.headers);
    }

    if (props.query) {
      request.query(props.query);
    }

    if (props.timeout && Number.isInteger(props.timeout)) {
      request.timeout(props.timeout);
    }
  }
}

export default RestClient;
