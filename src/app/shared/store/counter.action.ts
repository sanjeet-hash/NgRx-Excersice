import { createAction, props } from '@ngrx/store'; //here we create action to perform using ngrx

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction(//here PROS is use to pass multiple values
  'customIncrement',
  props<{ value: number; action: string }>()
); 
export const changeChanelName = createAction(
  'changeChanelName',
  props<{ chanel: string }>()
);
