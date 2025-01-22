import React from 'react';
import './body.css';
import { CountryList } from './CountryList';

export const BodyList = ({ countryList, removeCountry }) => {
  return (
    <main>
      <ul>
        <li id="list-section">
          <p>Country</p>
          <p>Golds</p>
          <p>Silvers</p>
          <p>Bronzes</p>
          <p>Total</p>
        </li>
        <br />
        {countryList.length === 0 ? (
          <li id="list-nothing">
            <p>아직 등록된 국가가 없습니다.</p>
          </li>
        ) : (
          countryList.map((country, idx) => {
            return (
              <CountryList
                country={country}
                key={idx}
                removeCountry={removeCountry}
              />
            );
          })
        )}
      </ul>
    </main>
  );
};
