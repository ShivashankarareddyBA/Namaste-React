import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from './../Contact';

test("should load contact us component", () => {
    render(<Contact/>);
    const headings = screen.getAllByRole("heading");
    headings.forEach((headings) => {
        expect(headings).toBeInTheDocument();
   });
});
