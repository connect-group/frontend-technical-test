import React from 'react';
// import './style.scss';

export default function ErrorBox(error) {
  return <div data-testid="error" className="error">{ error }</div>;
}
