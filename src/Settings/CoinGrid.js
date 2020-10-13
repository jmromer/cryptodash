import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

function getCoinsToDisplay (coins) {
  return Object.keys(coins).slice(0, 100);
}

export default function () {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList).map(coin => (
            <CoinTile key={coin} coinKey={coin} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
