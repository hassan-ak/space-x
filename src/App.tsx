// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import { Launches } from './components/launches/Launches';
import { ErrorPage } from './components/errorPage/ErrorPage';
import Footer from './components/footer/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Launches/>
      <ErrorPage/>
      <Footer/>
    </div>
  );
}

export default App;
