import React from 'react';

import CoinGrid from './CoinGrid';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import WelcomeMessage from './WelcomeMessage';

export default function () {
  return (
    <Page name='settings'>
      <WelcomeMessage />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
