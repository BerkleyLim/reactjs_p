import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';

// import Item from 'components/Item/Item';
import Item from './Item';

const Wrapper = styled.div`
  border: 1px solid blue;
  width: 80%;
  margin 0 auto;
  background-color: ${props => (props.isOver? 'pink' : 'white')};
`;

const List = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'First'},
    { id: 2, title: 'Second'},
    { id: 3, title: 'Third'},
  ]);
  
  // Reorder an array
  const moveCard = useCallback (
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];

      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1], // delete
            [hoverIndex, 0, dragCard], // Add
          ],
        })
      );
    },
    [cards]
  );

  return (
    <Wrapper>
      {cards.map((item, index) => (
        <Item
          index={index}
          id={item.id}
          title={item.title}
          moveCard={moveCard}
          key={item.id}
        />
      ))}
    </Wrapper>
  )
}

export default List;