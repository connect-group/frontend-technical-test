import React from 'react';
import './style.scss';

export default function Loader() {
  return (
    <div data-testid="loading" className="loader">
      Loading...
    </div>
  );
}
