import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "./counter.model";

//the selector is use to select which data we want to call
const getCounterState=createFeatureSelector<counterModel>('counter');

export const getCounter=createSelector(getCounterState,(state)=>{
    return state.counter
})

export const getChanelName=createSelector(getCounterState,(state)=>{
    return state.chanelName
}
)