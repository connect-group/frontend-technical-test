import React from 'react';
import { string } from 'prop-types';

const ErrorMessage = ({ message }) => <p>{message}</p>;

ErrorMessage.propTypes = {
  message: string
}

export { ErrorMessage };
