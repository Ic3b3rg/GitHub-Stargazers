import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import App from '../App';
import { apiService } from '../services/apiService';

// Mock della funzione getStargazer di apiService
apiService.getStargazer = jest.fn().mockReturnValue(Promise.resolve([]));
// Mock della funzione getUserProfile di apiService
apiService.getUserProfile = jest.fn().mockReturnValue(Promise.resolve({}));

describe('App', () => {
  it('should render properly', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    expect(getByText('Seach your favourite Repos')).toBeTruthy();
    expect(getByPlaceholderText('Type here to search the username')).toBeTruthy();
    expect(getByPlaceholderText('Type here to search the repo name')).toBeTruthy();
    expect(getByText('Search Stargazer')).toBeTruthy();
  });

  it('should call apiService when search button is pressed', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const usernameInput = getByPlaceholderText('Type here to search the username');
    const repoInput = getByPlaceholderText('Type here to search the repo name');
    const searchButton = getByText('Search Stargazer');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(repoInput, 'testrepo');
    fireEvent.press(searchButton);

    await waitFor(() => expect(apiService.getStargazer).toHaveBeenCalledWith('testuser', 'testrepo'));
    await waitFor(() => expect(apiService.getUserProfile).toHaveBeenCalledWith('testuser', 'testrepo'));
  });
});
