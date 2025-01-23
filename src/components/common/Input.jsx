import React from 'react';

export const Input = (props) => {
  const inputStyle = {
    width: '150px',
    height: '30px',
    borderRadius: '15px',
    border: '1px solid #716032',
    padding: '0 10px',
    fontSize: '12px',
    color: '#716032',
  };

  return <input {...props} style={inputStyle} />;
};
