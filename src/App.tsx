import React from 'react';
import './components/shared/styles.scss';
import { ClickCounter } from './components/shared/ClickCounter';

export const App = () => {
  const num = 23;
  return (
    <>
      <h1>Yo!!!!!!???Maaaan!{num}</h1>
      <ClickCounter />
    </>
  );
};
