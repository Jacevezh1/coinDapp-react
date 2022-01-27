/* Store: central informacion de estado de aplicacion, en este folder creamos lo que se conoce como una Store */

import { configureStore } from "@reduxjs/toolkit";
import { createSearchParams } from "react-router-dom";
import { cryptoApi } from "../services/cryptoApi"; /* Se importa para que el store pueda tener acceso a la Api */

export default configureStore({
    reducer:{ 
        [cryptoApi.reducerPath]: cryptoApi.reducer /* Especificar esto para cada reducer que creas, ya aplicacion conectada */
    },
})


