import React, { useState, useEffect } from 'react';
import './headerForm.css';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

export const HeaderForm = ({ addCountry, updateCountry, toggleTotal }) => {
  //state
  const [name, setName] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [total, setTotal] = useState(0);

  //총 개수 집계
  useEffect(() => {
    const totalMedals =
      parseInt(gold || 0) + parseInt(silver || 0) + parseInt(bronze || 0);
    // 전체 메달 수 업데이트
    setTotal(totalMedals);
  }, [gold, silver, bronze]);

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

        <button id="total" onClick={toggleTotal}>
          TOTAL
        </button>
      </nav>

      <div id="header_input_wrap">
        <form
          id="input_wrap"
          onSubmit={(e) => {
            e.preventDefault();
            addCountry(name, gold, silver, bronze, total);
          }}
        >
          <Input
            type="text"
            placeholder="Country name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="number"
            placeholder="0"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
          />
          <Input
            type="number"
            placeholder="0"
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
          />
          <Input
            type="number"
            placeholder="0"
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
          />
        </form>

        <div id="button_wrap">
          <Button
            onClick={() => {
              addCountry(name, gold, silver, bronze, total);
            }}
          >
            ADD
          </Button>
          <Button
            onClick={() => {
              updateCountry(name, gold, silver, bronze);
            }}
          >
            UPDATE
          </Button>
        </div>
      </div>
    </header>
  );
};
