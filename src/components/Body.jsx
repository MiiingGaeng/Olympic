import React from 'react';
import './body.css';
import { CountryList } from './CountryList';

export const Body = ({ countryList }) => {
  return (
    <main>
      <ul>
        <li id="list_section">
          <p>Country</p>
          <p>Golds</p>
          <p>Silvers</p>
          <p>Bronzes</p>
          <p>Total</p>
        </li>
        <br />
        {countryList.length === 0 ? (
          <li style={{ width: '100%', textAlign: 'center' }}>
            아직 등록된 국가가 없습니다.
          </li>
        ) : (
          countryList.map((country, idx) => {
            return <CountryList country={country} key={idx} />;
          })
        )}
      </ul>
    </main>
  );
};
