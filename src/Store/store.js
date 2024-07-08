import { configureStore } from "@reduxjs/toolkit";
import appFeatures from "../Features/appFeatures";

const Store = configureStore({
    reducer:{
        app: appFeatures,
    }
});

export default Store;