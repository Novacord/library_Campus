import React, { useState,Fragment } from 'react';

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  const renderItem = (item, index) => {
    return (
      <li key={index}>
        <button onClick={() => setActiveItem(index)}>
          {item.title}
        </button>
      </li>
    );
  };

  const renderContent = () => {
    if (items.length > 0) {
      return (
        <Fragment>
          <ul className='botonPregunta' style={{
            backgroundColor: '#ffffff',
            border: '1px solid #ccc',
          }}>
            {items.map(renderItem)}
          </ul>
          <div className='preguntas' style={{
            backgroundColor: '#000000',
            color: '#ffffff',
          }}>
            {items[activeItem].content}
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default Accordion;