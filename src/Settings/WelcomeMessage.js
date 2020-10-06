import React from 'react';

import { AppContext } from '../App/AppProvider';

export default function WelcomeMessage () {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        !firstVisit ? null : (
          <div>
            Welcome to CryptoDash, please select your favorite coin to begin.
          </div>
        )
      }
    </AppContext.Consumer>
  );
}
