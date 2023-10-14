
"use client"
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import store from './store/store'



export function Providers({children})    {
    return(
        <Provider store={store}>
            {children}

        </Provider>
    )
}