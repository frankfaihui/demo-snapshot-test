import React from 'react';
import Card from './Card';

export default function CardExample() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem' }}>
      {/* Basic card with title and description */}
      <Card 
        title="Basic Card" 
        description="This is a simple card with just a title and description."
      />
      
      {/* Card with a button */}
      <Card 
        title="Card with Button" 
        description="This card has a button that you can click."
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
      />
      
      {/* Card with custom content */}
      <Card title="Card with Custom Content">
        <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '0.25rem' }}>
          <p>This is some custom content that can be added to the card.</p>
          <ul>
            <li>You can add any React elements</li>
            <li>Fully customize the content</li>
            <li>While maintaining the card styling</li>
          </ul>
        </div>
      </Card>
    </div>
  );
} 