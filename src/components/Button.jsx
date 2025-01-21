import React from 'react';

export const Button = ({ onClick, children }) => {
  // style
  const buttonStyle = {
    width: '90px',
    height: '30px',
    borderRadius: '15px',
    border: 'none',
    background: '#fff',
  };

  return (
    <>
      <button style={buttonStyle} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
