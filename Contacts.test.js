import React from 'react';
import { render } from '@testing-library/react';
import Contacts from './Contacts';

test('renders contacts page', () => {
  const { getByText } = render(<Contacts />);
  const contactsElement = getByText(/Contacts Page/i);
  expect(contactsElement).toBeInTheDocument();
});
