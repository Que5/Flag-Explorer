
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import FlagGrid from './components/FlagGrid.tsx';
import CountryDetail from './components/CountryDetail.tsx';

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