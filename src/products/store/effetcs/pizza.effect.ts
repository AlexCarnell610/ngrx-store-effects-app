import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import {
  PizzaActionTypes,
  LoadPizzasSuccess,
  LoadPizzasFail
} from "../actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { PizzasService } from "../../services";
import { of } from "rxjs/observable/of";

@Injectable()
export class PizzaEffects {
  constructor(private actions$: Actions, private pizzaService: PizzasService) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(PizzaActionTypes.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new LoadPizzasSuccess(pizzas)),
        catchError(error => of(new LoadPizzasFail(error)))
      );
    })
  );
}
