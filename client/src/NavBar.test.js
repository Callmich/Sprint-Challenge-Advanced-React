import React from 'react';
import { render, fireEvent} from "@testing-library/react";
import NavBar from './NavBar';

test('button fires and can still be read',()=> {

    const { getByText } = render(<NavBar />)

    getByText(/Google Trends/i)
    const dmButton = getByText(/dark mode/i)
    
    fireEvent.click(dmButton);
    getByText(/Google Trends/i)

})

