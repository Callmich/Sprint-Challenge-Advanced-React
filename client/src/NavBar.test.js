import React from 'react';
import { render, fireEvent} from "@testing-library/react"; 
import NavBar from './NavBar';
import App from './App'



test('button fires and can still be read', async ()=> {

    const { getByText, findByText } = render(<NavBar /> && <App/> )

    getByText(/Google Trends/i)
    getByText(/US Women's Soccer Team/i)
    await findByText(/Alex Morgan/i) 
    
    const dmButton = getByText(/dark mode/i)
    
    fireEvent.click(dmButton);
    
    getByText(/Google Trends/i)
    getByText(/US Women's Soccer Team/i)
    await findByText(/Alex Morgan/i) 

})

