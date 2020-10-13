import React from 'react';

import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';

export default function ({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        const { CoinName, Symbol } = coinList[coinKey];
        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid name={CoinName} symbol={Symbol} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
