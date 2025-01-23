import React, { useState } from 'react';
import { HeaderForm } from './components/header/HeaderForm';
import { BodyListWrap } from './components/body/BodyListWrap';
import './app.css';

export const App = () => {
  //로컬스토리지
  const countryList = JSON.parse(localStorage.getItem('countryList')) || [];

  //state
  const [countries, setCountries] = useState(countryList);

  //추가 로직
  const addCountry = (name, gold, silver, bronze, total) => {
    const newCountry = {
      name,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
      total: Number(total),
    };

    //예외처리
    //이름이 공백인 경우
    if (!name.trim()) return alert('유효하지 않은 정보입니다!');
    //메달이 음수인 경우
    if (gold && silver && bronze < 0) return alert('유효하지 않은 정보입니다!');

    //목록에 있는지 여부 판단로직
    const isCountryFound = [...countries].some(
      (country) =>
        //입력 국가가 목록에 없는 경우만 내보냄
        newCountry.name.toLowerCase() === country.name.toLowerCase()
    );

    if (isCountryFound) {
      alert('이미 존재하는 국가 정보입니다!');
      return;
    }

    //국가 메달순으로 정렬
    const sortedAddedCountries = [...countries, newCountry].sort((a, b) => {
      // 금메달 기준 정렬
      if (b.gold !== a.gold) return b.gold - a.gold;
      // 은메달 기준 정렬
      if (b.silver !== a.silver) return b.silver - a.silver;
      // 동메달 기준 정렬
      if (b.bronze !== a.bronze) return b.bronze - a.bronze;
      // 총 메달 기준 정렬
      return b.total - a.total;
    });

    //state 변경
    setCountries(sortedAddedCountries);
    localStorage.setItem('countryList', JSON.stringify(sortedAddedCountries));

    //정보추가 알람
    alert('정보가 추가되었습니다!');

    //렌더링
  };

  //삭제 로직
  const removeCountry = (name) => {
    const modifiedContries = [...countries].filter((country) => {
      return country.name !== name;
    });

    //state 변경
    setCountries(modifiedContries);
    localStorage.setItem('countryList', JSON.stringify(modifiedContries));

    //정보삭제 알람
    alert('해당 정보가 삭제되었습니다!');

    //렌더링
  };

  //업데이트 로직
  const updateCountry = (name, gold, silver, bronze) => {
    let isCountryFound = false;

    //해당 국가 정보 수정
    const updatedCountries = [...countries].map((country) => {
      //입력 국가가 있는 경우
      if (country.name.toLowerCase() === name.toLowerCase()) {
        isCountryFound = true;

        return {
          ...country,
          gold: Number(gold),
          silver: Number(silver),
          bronze: Number(bronze),
          total: Number(gold) + Number(silver) + Number(bronze),
        };
      }

      return country;
    });

    //입력 국가가 없는 경우
    if (!isCountryFound) {
      alert('해당 국가의 정보가 없습니다.');
      return;
    }

    //국가 메달순으로 정렬
    const sortedUpdateCountry = updatedCountries.sort((a, b) => {
      // 금메달 기준 정렬
      if (b.gold !== a.gold) return b.gold - a.gold;
      // 은메달 기준 정렬
      if (b.silver !== a.silver) return b.silver - a.silver;
      // 동메달 기준 정렬
      if (b.bronze !== a.bronze) return b.bronze - a.bronze;
      // 총 메달 기준 정렬
      return b.total - a.total;
    });

    // state와 로컬스토리지 업데이트
    setCountries(sortedUpdateCountry);
    localStorage.setItem('countryList', JSON.stringify(sortedUpdateCountry));

    //정보수정 알람
    alert('해당 정보가 수정되었습니다!');
  };

  //메달 개수 토글 로직
  const [isSortedByTotal, setIsSortedByToTal] = useState(false);
  const toggleTotal = () => {
    //금메달-은메달-동메달 순서
    if (isSortedByTotal) {
      const sortedByMedals = [...countries].sort((a, b) => {
        // 금메달 기준 정렬
        if (b.gold !== a.gold) return b.gold - a.gold;
        // 은메달 기준 정렬
        if (b.silver !== a.silver) return b.silver - a.silver;
        // 동메달 기준 정렬
        if (b.bronze !== a.bronze) return b.bronze - a.bronze;
        // 총 메달 기준 정렬
        return b.total - a.total;
      });

      // state와 로컬스토리지 업데이트
      setCountries(sortedByMedals);
      localStorage.setItem('countryList', JSON.stringify(sortedByMedals));
      setIsSortedByToTal(false);
    }
    //총 메달 개수 순서
    else {
      const sortedByTotalMedals = [...countries].sort(
        (a, b) => b.total - a.total
      );

      // state와 로컬스토리지 업데이트
      setCountries(sortedByTotalMedals);
      localStorage.setItem('countryList', JSON.stringify(sortedByTotalMedals));
      setIsSortedByToTal(true);
    }
  };

  return (
    <div id="backgroundImage">
      <div id="backgroundGradient">
        <HeaderForm
          addCountry={addCountry}
          updateCountry={updateCountry}
          toggleTotal={toggleTotal}
        />
        <BodyListWrap countryList={countryList} removeCountry={removeCountry} />
      </div>
    </div>
  );
};

export default App;
