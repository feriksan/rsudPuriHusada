import { configureStore } from '@reduxjs/toolkit'
import bpjsReducer from '../features/bpjs/saveBpjsData.js'
import jadwalReducer from '../features/penjadwalan/saveJadwal.js'

export default configureStore({
    reducer: {
        bpjs: bpjsReducer,
        jadwal: jadwalReducer
    },
})