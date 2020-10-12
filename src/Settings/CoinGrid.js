import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default function () {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map(coin => (
            <Tile key={coin}>{coin}</Tile>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}