import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import { AppProvider } from './AppProvider';
import AppBar from './AppBar';
import WelcomeMessage from '../Settings/WelcomeMessage';

function App () {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar />
        <WelcomeMessage />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
