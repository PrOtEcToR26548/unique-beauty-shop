import React from 'react';
import { render } from '@testing-library/react';
import HeaderComponent from '../components/HeaderComponent';

test('renders header with title', () => {
    const { getByText } = render(<HeaderComponent />);
    const linkElement = getByText(/Unique Beauty Shop/i);
    expect(linkElement).toBeInTheDocument();
});
