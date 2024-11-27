'use client'
import { store } from '@/redux/store';
import React from 'react'
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
type ProvidersProps = {
    children: ReactNode; // ReactNode is a type that can represent any valid child in React (elements, strings, numbers, etc.)
};
const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers