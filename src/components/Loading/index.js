import React from 'react';
import './style.scss';

export default function Loading() {
  return (
    <div data-testid="loading" className="loading">
      <img src="/loading.svg" alt="Loading" className="loading__icon" />
    </div>
  );
}
