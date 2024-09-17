import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AlertStyles';

// Function to handle the error
export const handleError = (
  error: unknown,
  setErrorMessage: (message: string) => void
): void => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      setErrorMessage('City not found');
    } else {
      setErrorMessage('Something went wrong');
    }
  } else {
    setErrorMessage('An unexpected error occurred');
  }
};

// Component to display the alert
export const AlertComponent: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Function to close the alert
  const closeAlert = () => setErrorMessage(null);

  // Simulate an error to test the alert
  const simulateError = () => {
    try {
      throw new Error('Simulated error');
    } catch (error) {
      handleError(error, setErrorMessage);
    }
  };

  // Automatically close the alert after 3 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 3000); // 3 seconds

      // Clear timeout if the component unmounts or errorMessage changes
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <div>
      {/* Hide the "Simulate Error" button if an error message is active */}
      {!errorMessage && <button onClick={simulateError}>Simulate Error</button>}

      {/* Only show the popup if there's an error */}
      {errorMessage && (
        <>
          {/* Overlay */}
          <div className="alert-overlay" onClick={closeAlert}></div>

          {/* Popup container */}
          <div className="alert-popup-container">
            <span>{errorMessage}</span>
            <button className="alert-close-btn" onClick={closeAlert}>
              &times;
            </button>
          </div>
        </>
      )}
    </div>
  );
};
