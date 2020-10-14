import React from 'react';

export default function ({ style, symbol, path }) {
  return (
    <img
      alt={symbol}
      style={style || { height: '50px' }}
      src={`http://cryptocompare.com/${path}`}
    />
  );
}
