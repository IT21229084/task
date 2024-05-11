import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toHaveTextContent
import Apod from './Apod'; // Assuming the component file is named Apod.jsx

// Mocking the custom hook useFetch
jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: {
      title: 'Test Title',
      explanation: 'Test Explanation',
      url: 'https://example.com/test-image.jpg',
    },
    loading: false,
    error: null,
    reFetch: jest.fn(),
  })),
}));

describe('Apod component', () => {
  it('renders with fetched data', async () => {
    render(<Apod />);
    // Wait for the component to finish loading
    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Explanation')).toBeInTheDocument();
      expect(screen.getByAltText('Temperatures on Exoplanet WASP-43b')).toBeInTheDocument();
    });
  });

  it('renders more images with fetched data', async () => {
    // Mocking the fetch call for additional images
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              title: 'Test Image 1',
              url: 'https://example.com/test-image1.jpg',
            },
            {
              title: 'Test Image 2',
              url: 'https://example.com/test-image2.jpg',
            },
          ]),
      })
    );

    render(<Apod />);
    // Wait for the component to finish loading
    await waitFor(() => {
      expect(screen.getByText('More Images OF The Days')).toBeInTheDocument();
      expect(screen.getByText('Test Image 1')).toBeInTheDocument();
      expect(screen.getByText('Test Image 2')).toBeInTheDocument();
    });
  });

  it('navigates to next image on button click', async () => {
    render(<Apod />);
    await waitFor(() => {
      const nextButton = screen.getByTestId('next-button'); // Assuming you add a data-testid to the button
      userEvent.click(nextButton);
      // Add expectations for navigation
    });
  });
});
