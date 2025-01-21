import React, { useState } from 'react';
import './header.css';
import { Button } from './Button';

export const Header = ({ addCountry }) => {
  //state
  const [name, setName] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  return (
    <header>
      <h1>Paris 2024</h1>

      <nav id="header_title_wrap">
        <ul>
          <li>Country</li>
          <li>Golds</li>
          <li>Silvers</li>
          <li>Bronzes</li>
        </ul>

        <button id="total">TOTAL</button>
      </nav>

      <div id="header_input_wrap">
        <div id="input_wrap">
          <input
            type="text"
            placeholder="Country name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="0"
            value={gold}
            onChange={(e) => {
              setGold(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="0"
            value={silver}
            onChange={(e) => {
              setSilver(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="0"
            value={bronze}
            onChange={(e) => {
              setBronze(e.target.value);
            }}
          />
        </div>

        <div id="button_wrap">
          <Button
            onClick={() => {
              addCountry(name, gold, silver, bronze);
            }}
          >
            ADD
          </Button>
          <Button>UPDATE</Button>
        </div>
      </div>
    </header>
  );
};
