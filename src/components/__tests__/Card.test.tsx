import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card Component Snapshot', () => {
  it('renders correctly with all props', () => {
    const { container } = render(
      <Card 
        title="Test Card Title" 
        description="This is a test description for the card component"
        buttonText="Click Me"
        onButtonClick={() => {}}
      >
        <div data-testid="test-child">Card children content</div>
      </Card>
    );
    
    expect(container).toMatchSnapshot();
  });
}); 