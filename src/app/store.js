import { configureStore } from '@reduxjs/toolkit'
import bpjsReducer from '../features/bpjs/saveBpjsData.js'
import jadwalReducer from '../features/penjadwalan/saveJadwal.js'
import rujukanReducer from '../features/rujukan/saveRujukanData.js'

export default configureStore({
    reducer: {
        bpjs: bpjsReducer,
        jadwal: jadwalReducer,
        rujukan: rujukanReducer
    },
})