import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import FlagGrid from '../components/FlagGrid';
import countryReducer from '../redux/reducers';
import '@testing-library/jest-dom';

test('renders loading state', () => {
  const store = createStore(countryReducer, {
    countries: { loading: true, countries: [], error: null },
  });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <FlagGrid />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});