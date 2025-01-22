import React from 'react';
import './countryList.css';

export const CountryList = ({ country, removeCountry }) => {
  //정보 넣기
  let { name, gold, silver, bronze, total } = country;

  return (
    <li key={name}>
      <div>
        <p>{name}</p>
        <p>{gold}</p>
        <p>{silver}</p>
        <p>{bronze}</p>
        <p>{total}</p>
      </div>
      <button
        onClick={() => {
          removeCountry(name);
        }}
      >
        DELETE
      </button>
    </li>
  );
};
