import React from 'react';
import './components/shared/styles.css';
import IMAGE from './assets/images/doubleBuck.png';
import BUCK from './assets/images/buck.svg';
import { ClickCounter } from './components/shared/ClickCounter';

export const App = () => {
  const num = 23;
  return (
    <>
      <h1>Yo!!!!!!???Maan!!!{num}</h1>
      <img src={IMAGE} alt="defaultImage1"></img>
      <img src={BUCK} alt="defaultImage2"></img>
      <ClickCounter />
    </>
  );
};
