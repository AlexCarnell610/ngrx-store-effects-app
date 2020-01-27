import {
  PizzaState,
  reducer,
  getPizzas,
  getPizzasLoaded,
  getPizzasLoading
} from "./pizzas.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export interface ProductsState {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

//pizza state
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, getPizzas);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  getPizzasLoaded
);

export const getAllPizzasLoading = createSelector(
  getPizzaState,
  getPizzasLoading
);
