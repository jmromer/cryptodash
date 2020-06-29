import React from 'react';
import './App.css';
import styled, { css } from 'styled-components';

import WelcomeMessage from '../WelcomeMessage';

const MyButton = styled.div`
  color: green;
  ${props =>
    props.primary &&
    css`
      color: palevioletred;
    `}
`;

const TomatoButton = styled(MyButton)`
color: tomato;
border-color: tomato;
`

function App () {
  return (
    <>
      <WelcomeMessage />
      <MyButton>Hi</MyButton>
      <MyButton primary>Hello</MyButton>
      <TomatoButton>Hello</TomatoButton>
    </>
  );
}

export default App;
