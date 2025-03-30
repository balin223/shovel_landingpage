import React from 'react';
import './App.css';
import Layout from './components/Layout';
import HeroBanner from './components/HeroBanner';
import { ThemeProvider } from './styles/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HeroBanner />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
