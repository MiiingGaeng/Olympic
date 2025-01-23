import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

export const Button = ({ onClick, children }) => {
  // style
  const StyledButton = styled.button`
    width: 90px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: rgb(236, 214, 134);
    color: #fffae5;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  `;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <StyledButton
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={isHovering ? 'hover' : ''}
      >
        {children}
      </StyledButton>
    </>
  );
};
