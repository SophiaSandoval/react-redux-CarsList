import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, 
    removeCar, changeSerachTerm } from "./slices/carsSiice";
import {formReducer, changeName, changeCost} from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store,
        changeCost,
        changeName,
        removeCar,
    changeSerachTerm,
            addCar}