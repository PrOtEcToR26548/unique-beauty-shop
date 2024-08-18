import React from 'react';
import { render } from '@testing-library/react';
import FooterComponent from '../components/FooterComponent';

test('renders footer with copyright', () => {
    const { getByText } = render(<FooterComponent />);
    const linkElement = getByText(/© 2024 Unique Beauty Shop/i);
    expect(linkElement).toBeInTheDocument();
});
