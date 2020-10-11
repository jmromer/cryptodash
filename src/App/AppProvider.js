import React from 'react';

import cc from 'cryptocompare';

cc.setApiKey(process.env.CRYPTOCOMPARE_API_KEY);

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: 'dashboard' });
    localStorage.setItem('cryptodash', JSON.stringify({ test: 'hello' }));
  };

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  savedSettings () {
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptodash'));
    return cryptoDashData ? {} : { page: 'settings', firstVisit: true };
  }

  setPage = page => this.setState({ page });

  render () {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
