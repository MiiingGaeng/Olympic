# OLYMPIC🏋

Vite + React를 사용한 첫번째 프로젝트로, 국가별 2024 파리 올림픽 메달을 사용자가 입력하고, 메달 수에 따른 순위를 보여주는 웹페이지입니다.

## 프로젝트 미리보기🏅

- 첫 화면
<img width="1440" alt="Screenshot 2025-01-23 at 6 28 13 PM" src="https://github.com/user-attachments/assets/b3d6d3c8-588a-47a4-9a9d-eb73738b7f92" />

- 금-은-동 순서로 정렬
<img width="1440" alt="Screenshot 2025-01-23 at 6 31 55 PM" src="https://github.com/user-attachments/assets/96c8aa51-92d2-45d5-9ea6-da1b42338554" />

- 전체 메달 순서로 정렬
<img width="1440" alt="Screenshot 2025-01-23 at 6 31 59 PM" src="https://github.com/user-attachments/assets/e9843efa-7289-4c55-a0f1-b037344c973e" />

## 프로젝트 소개📄

**📆 프로젝트 기간 : 2025.01.21 ~ 2025.01.24**

로컬스토리지를 활용하여 국가별 메달 순위를 저장하고, `TOTAL 버튼`을 클릭하면 '금-은-동 수' 혹은 '전체 메달 수'에 맞춰 정렬된 순위를 보여줍니다. 새로운 국가 정보는 `ADD 버튼`을 통해 등록할 수 있고, 기존 국가의 정보를 수정할 때에는 `UPDATE 버튼`을 통해 새로운 정보로 업데이트 할 수 있습니다.

아직 반응형 디자인이 완벽하게 적용되지 않아, PC 환경에 최적화되어 있으며 모바일 환경은 지원하지 않습니다.

## 프로젝트 사용 기술💻

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## 프로젝트 기능⚙️

- React, css로 구성되었습니다.
- 영어를 제공합니다.
- 로컬 스토리지를 사용하여 새로고침해도 입력한 정보가 사라지지 않습니다.
- 국가명 빈칸, 메달 수 음수입력에 대한 예외처리가 가능합니다.

## 트러블 슈팅🧑‍💻

[TroubleShooting 1 : ADD 기능](https://velog.io/@miiing_gaeng/%EC%98%AC%EB%A6%BC%ED%94%BD-%EB%A9%94%EB%8B%AC-%EC%82%AC%EC%9D%B4%ED%8A%B8-TroubleShooting-1-ADD-%EA%B8%B0%EB%8A%A5)

[요약]<br>
문제 ▶️ input 값이 로컬스토리지에 저장되지 않는 문제 발생
<br>해결 ▶️ state 중복 선언 제거, 함수의 인자값 재설정
<br>교훈 ▶️ state와 함수에 대한 개념 복습 필요
