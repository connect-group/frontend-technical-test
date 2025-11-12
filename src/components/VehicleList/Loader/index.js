import React from 'react';
import './style.scss';

export default function Loader() {
  return (
    <div data-testid="loading" className="Loader">
      <div className="Loader__spinner" aria-label="Loading vehicles." />
    </div>
  );
}
