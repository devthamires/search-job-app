import { Injectable } from '@angular/core';
import { ControlItem, Item } from '@app/models/frontend';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, zip } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from './dictionaries.actions';
import { Dictionaries, Dictionary } from './dictionaries.models';

type Action = fromActions.All;

const role$: Observable<Item[]> = of([]);
const skill$: Observable<Item[]> = of([]);
const qualifications$: Observable<Item[]> = of([]);
const specializations$: Observable<Item[]> = of([]);

const itemToControlItem = (x: Item): ControlItem => ({
  value: x.id,
  label: x.name,
  icon: x.icon,
});

const addDictionary = (items: Item[]): Dictionary => ({
  items,
  controlItems: [...items].map((item) => itemToControlItem(item)),
});

@Injectable()
export class DictionariesEffects {
  constructor(private actions: Actions) {}

  @Effect()
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap(() => {
      return zip(role$, skill$, qualifications$, specializations$).pipe(
        map(([roles, specializations, qualifications, skills]) => {
          const dictionaries: Dictionaries = {
            roles: addDictionary(roles),
            specializations: addDictionary(specializations),
            qualifications: addDictionary(qualifications),
            skills: addDictionary(skills),
          };

          return new fromActions.ReadSucess(dictionaries);
        }),
        catchError((err) => of(new fromActions.ReadError(err.message)))
      );
    })
  );
}
