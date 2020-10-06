import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import { AppProvider } from './AppProvider';
import AppBar from './AppBar';
import Settings from '../Settings';

function App () {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <Settings />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
