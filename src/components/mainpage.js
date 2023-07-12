import React from 'react';
import Card from './Card';
import Table from './Table';
import Button from './Button';

const MainPage = () => {
  const cardData = [
    { title: 'Card 1', content: 'This is the content for Card 1.' },
    { title: 'Card 2', content: 'This is the content for Card 2.' },
    { title: 'Card 3', content: 'This is the content for Card 3.' },
  ];

  const tableData = [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Smith', age: 30 },
    { name: 'Bob Johnson', age: 35 },
  ];

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="main-page">
      <h1>Main Page</h1>

      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>

      <Table data={tableData} />

      <div className="button-container">
        <Button label="Click Me" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default MainPage;
