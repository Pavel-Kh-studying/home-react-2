import React from 'react';
import Counter from './components/counter';

function App(props) {
  const step = 10;

  return (
    <>
      <Counter step={step}/>
    </>
  );
}

export default App;
