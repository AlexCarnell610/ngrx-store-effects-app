import { Pizza } from '../../models/pizza.model';
import { PizzasAction, PizzaActionTypes } from '../actions/pizzas.actions';

export interface PizzaState {
    data: Pizza[],
    loaded: boolean,
    loading: boolean
}

export const initialState: PizzaState = {
    data: [],
    loaded: false,
    loading: false
}

export function reducer (
    state = initialState,
    action: PizzasAction
): PizzaState {

    switch(action.type) {
        case PizzaActionTypes.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true
            };
        }
        case PizzaActionTypes.LOAD_PIZZAS_SUCCESS: {
            console.log(action.payload);
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }
        case PizzaActionTypes.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getPizzasLoading = (state:PizzaState) => state.loading;
export const getPizzasLoaded = (state:PizzaState) => state.loaded;
export const getPizzas = (state:PizzaState) => state.data;