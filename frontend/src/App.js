import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';
import FlagGrid from './components/FlagGrid';
import CountryDetail from './components/CountryDetail';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<FlagGrid />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;