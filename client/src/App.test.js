import React from 'react';
import { render, findByText } from "@testing-library/react";
import App from './App';

test('Renders Correctly', () => {
    const { getByText, fireEvent, findByText } = render(<App />);

    getByText(/Google Trends/i)
    getByText(/US Women's Soccer Team/i)
    findByText(/Alex Morgan/i)
    


}) 