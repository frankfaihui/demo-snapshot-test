import React from 'react';
import { render } from '@testing-library/react';
import BaseButton from '../BaseButton';

describe('BaseButton', () => {
  it('renders basic button correctly', () => {
    const { container } = render(<BaseButton>Click me</BaseButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
}); 