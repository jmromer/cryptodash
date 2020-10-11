import './App.css';

import React from 'react';

import { AppProvider } from './AppProvider';
import AppBar from './AppBar';
import AppLayout from './AppLayout';
import Content from '../Shared/Content';
import Settings from '../Settings';

function App () {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppLayout>
    </AppProvider>
  );
}

export default App;
