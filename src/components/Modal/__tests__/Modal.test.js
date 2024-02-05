import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Modal from '../index';

describe('Modal', () => {
  // Create a div with id 'modal-root' in the body before each test
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  // Clean up after each test
  afterEach(() => {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  it('renders when isOpen is true', () => {
    const { getByText } = render(<Modal isOpen>Vehicle Details</Modal>);
    expect(getByText('Vehicle Details')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(<Modal isOpen={false}>Vehicle Details</Modal>);
    expect(queryByText('Vehicle Details')).not.toBeInTheDocument();
  });

  it('closes when the close button is clicked', async () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <Modal isOpen onClose={onClose}>
        Vehicle Details
      </Modal>
    );
    fireEvent.click(getByRole('button'));
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });
});
