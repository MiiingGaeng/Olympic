import React from 'react';
import './countryList.css';

export const CountryList = ({ country }) => {
  //정보 넣기
  let { name, gold, silver, bronze } = country;
  let total = parseInt(gold) + parseInt(silver) + parseInt(bronze);

  return (
    <li key={name}>
      <div>
        <p>{name}</p>
        <p>{gold}</p>
        <p>{silver}</p>
        <p>{bronze}</p>
        <p>{total}</p>
      </div>
      <button>DELETE</button>
    </li>
  );
};
