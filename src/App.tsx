// Imports
// React Imports
import React from 'react';
// Router Imports
import { Route, Routes } from 'react-router-dom';
// Component Imports
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import { Launches } from './components/launches/Launches';
import { Succeeded } from './components/succeeded/Succeeded';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Failed } from './components/failed/Failed';
import { UpComming } from './components/upcomming/UpComming';
import { LaunchCat } from './components/LaunchCat';
import { Launch } from './components/launch/Launch';
import Footer from './components/footer/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launches" element={<Launches />} />
        <Route path="launches/succeeded" element={<LaunchCat />}>
          <Route path="/" element={<Succeeded />} />
          <Route path=":slug" element={<Launch/>}></Route>
        </Route>
        <Route path="launches/failed" element={<LaunchCat />}>
          <Route path="/" element={<Failed />} />
          <Route path=":slug" element={<Launch/>}></Route>
        </Route>
        <Route path="launches/upcomming" element={<LaunchCat />}>
          <Route path="/" element={<UpComming />} />
          <Route path=":slug" element={<Launch/>}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
