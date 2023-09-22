import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button onClick={() => setActiveItem(index)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {activeItem && <div>{items[activeItem].content}</div>}
      </div>
    </div>
  );
};

const Preguntas = ()=>{
    const [open, setOpen] = useState(false);
    return(
    <li>
        <button onClick={() => setOpen(!open)}>
          {title}
        </button>
        {open && <div>{content}</div>}
      </li>
    )
}

const items = [
    {
      title: 'Panel 1',
      content: 'Este es el contenido del panel 1.',
    },
    {
      title: 'Panel 2',
      content: 'Este es el contenido del panel 2.',
    },
  ];

export default Preguntas;