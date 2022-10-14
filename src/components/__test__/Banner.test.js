import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from '../Banner'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../../redux/store';
import { Provider } from 'react-redux';

beforeEach(() => {
    render(
        <Provider store={store}>
            <Router>
                <Banner />
            </Router>
        </Provider>

    )
})

// Banner da Ülke Adına ait element var mı ?
test('Do you have a country name', () => {
    const countryNameEl = screen.getByTestId('countryName');
    // screen.debug()
    expect(countryNameEl).toBeInTheDocument();
})

// Banner da Güncelleme Tarihine ait element var mı ?
test('Do you have a updated date', () => {
    const updatedDateEl = screen.getByTestId('updatedDate');
    // screen.debug()
    expect(updatedDateEl).toBeInTheDocument();
})


