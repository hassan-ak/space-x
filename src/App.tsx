// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import { Launches } from './components/launches/Launches';
import { Succeeded } from './components/succeeded/Succeeded';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Failed } from './components/failed/Failed';
import { UpComming } from './components/upcomming/UpComming';
import { Launch } from './components/launch/Launch';
import Footer from './components/footer/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Launches/>
      <Succeeded/>
      <Failed/>
      <UpComming/>
      <Launch/>
      <ErrorPage/>
      <Footer/>
    </div>
  );
}

export default App;
