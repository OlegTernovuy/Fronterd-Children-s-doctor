import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Header from "./Header";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";


describe('USERS TEST', () => {
    test('test addVac link', async() => {
        render(renderWithRouter(<Header />));
        const usersLink = screen.getByTestId('addVac')
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    });
    test('test declaration link', async() => {
        render(renderWithRouter(<Header />));
        const aboutLink = screen.getByTestId('declaration')
        userEvent.click(aboutLink);
        expect(screen.getByTestId('declaration')).toBeInTheDocument()
    });
    test('test price link', async() => {
        render(renderWithRouter(<Header />, '/price'));
        const mainLink = screen.getByTestId('price')
        userEvent.click(mainLink);
        expect(screen.getByTestId('price')).toBeInTheDocument()
    });
})
