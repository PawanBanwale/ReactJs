import {configureStore} from '@reduxjs/toolkit';
import slice from '../features/counterslice.jsx';
const store = configureStore({
    reducer: {
        counter:slice
    }
})

export default store;