import React, { useState } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';

export const App = () => {
  //로컬스토리지
  const countryList = JSON.parse(localStorage.getItem('countryList')) || [];

  //state
  const [countries, setCountries] = useState(countryList);

  //추가 로직
  const addCountry = (name, gold, silver, bronze) => {
    const newCountry = {
      name,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

    const addedCountries = [...countries, newCountry];

    //state 변경
    setCountries(addedCountries);
    localStorage.setItem('countryList', JSON.stringify(addedCountries));

    //정보추가 알람
    alert('정보가 추가되었습니다!');

    //렌더링
  };

  //삭제 로직
  const removeCountry = () => {
    // const modifiedContries = [...countries].filter((country) => {
    //   country.name !== name;
    // });

    //state 변경
    setCountries(modifiedContries);
    localStorage.setItem('countryList', JSON.stringify(modifiedContries));

    //정보삭제 알람
    alert('해당 정보가 삭제되었습니다!');
  };

  return (
    <div>
      <Header countryList={countryList} addCountry={addCountry} />
      <Body countryList={countryList} />
    </div>
  );
};

export default App;
