import React from 'react';
import Card from './components/Card';
import Table from './components/Table';
import Button from './components/Button';

const App = () => {
  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1.',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2.',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3.',
    },
  ];

  const tableData = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 40,
    },
  ];

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
      <Table data={tableData} />
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default App;
