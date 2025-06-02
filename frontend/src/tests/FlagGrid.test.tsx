import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import FlagGrid from '../components/FlagGrid';
import countryReducer from '../redux/reducers';
import '@testing-library/jest-dom';

import { RootState } from '../redux/store';
import { Country } from '../redux/types';

import { configureStore } from '@reduxjs/toolkit';
import { vi } from 'vitest';
import axios from 'axios';


vi.mock('axios');

const setupStore = (initialState?: Partial<RootState>) => {
  return configureStore({
    reducer: {
      countries: countryReducer,
    },
    preloadedState: initialState,
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

// --- IMPORTANT CHANGE: Clear mocks before each test ---
beforeEach(() => {
  // Resets the mock implementation and its call history
  // This is crucial to ensure each test starts with a clean slate for axios.get
  (axios.get as ReturnType<typeof vi.fn>).mockClear();
});

afterEach(() => {
  
});

test('renders loading state', async () => {
  
  (axios.get as ReturnType<typeof vi.fn>).mockImplementation(() => new Promise(() => {}));


  const mockStore = setupStore({
    countries: { loading: true, countries: [], error: null },
  });

  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <FlagGrid />
      </MemoryRouter>
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});

test('renders error state', async () => {
  const errorMessage = 'Failed to fetch countries';
  // Use mockImplementation
  (axios.get as ReturnType<typeof vi.fn>).mockImplementation(() => Promise.reject(new Error(errorMessage)));

  const mockStore = setupStore({
    countries: { loading: false, countries: [], error: errorMessage },
  });

  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <FlagGrid />
      </MemoryRouter>
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });
  expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
});


test('renders countries when loaded successfully', async () => {
  const mockCountries: Country[] = [
    { name: 'Test Country 1', flag: 'flag1.png', population: 1000000, capital: 'Capital One' },
    { name: 'Test Country 2', flag: 'flag2.png', population: 2000000, capital: ['Capital Two A', 'Capital Two B'] },
  ];

  // Use mockImplementation
  (axios.get as ReturnType<typeof vi.fn>).mockImplementation(() => Promise.resolve({ data: mockCountries }));

  const mockStore = setupStore({
    countries: { loading: false, countries: mockCountries, error: null },
  });

  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <FlagGrid />
      </MemoryRouter>
    </Provider>
  );

  await waitFor(() => {
    expect(screen.getByAltText('Test Country 1 flag')).toBeInTheDocument();
    expect(screen.getByAltText('Test Country 2 flag')).toBeInTheDocument();
    expect(screen.getByText('Test Country 1')).toBeInTheDocument();
    expect(screen.getByText('Test Country 2')).toBeInTheDocument();
  });
  expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
});


test('dispatches fetchCountries on mount', async () => {
  (axios.get as ReturnType<typeof vi.fn>).mockImplementation(() => Promise.resolve({ data: [] }));

  const mockStore = setupStore({
    countries: { loading: false, countries: [], error: null },
  });

  render(
    <Provider store={mockStore}>
      <MemoryRouter>
        <FlagGrid />
      </MemoryRouter>
    </Provider>
  );

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(1); 
    expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v2/all');
  });
});
