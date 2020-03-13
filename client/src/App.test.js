import React from 'react';
import { render, findByText } from "@testing-library/react"; 
import App from './App';

test('Renders Correctly', async () => {
    const { getByText, findByText } = render(<App />);

    getByText(/Google Trends/i)
    getByText(/US Women's Soccer Team/i)
    await findByText(/Alex Morgan/i)  

}) 