import React from 'react';

import { AppContext } from '../App/AppProvider';
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function ({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        const { CoinName, Symbol, ImageUrl } = coinList[coinKey];
        const TileClass = topSection ? SelectableTile : DeletableTile;

        return (
          <TileClass>
            <CoinHeaderGrid name={CoinName} symbol={Symbol} />
            <CoinImage symbol={Symbol} path={ImageUrl} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
