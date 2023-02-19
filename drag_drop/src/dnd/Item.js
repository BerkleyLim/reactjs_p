import React, { useRef } from 'react';
import styled from 'styled-components';

// import { ItemTypes } from '../utils/item';
import { ItemTypes } from './item';
import { useDrag, useDrop } from 'react-dnd';

const Wrapper = styled.div`
  border: 1px solid blue;
  opacity: ${props => (props.isDragging? 0 : 1)};
  background-color: green;
`

const Item = ({ id, title, index, moveCard }) => {
  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClinetRect();
      const hoverMiddleY = 
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id ,index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <Wrapper ref={ref} isDragging={isDragging}>
      <p>{title}</p>
    </Wrapper>
  )
}

export default Item;