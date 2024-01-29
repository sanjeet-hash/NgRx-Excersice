//here we create reducer in which we call the actions.
import { createReducer, on} from "@ngrx/store"
import { initialState } from "./counter.state"
import { changeChanelName, customIncrement, decrement, increment, reset } from "./counter.action"

const _counterReducer=createReducer(initialState,on(increment,(state)=>{
    return{
        ...state,
        counter:state.counter+1
    };
}),
on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter-1
    };
}),
on(reset,(state)=>{
    return{
        ...state,
        counter:0
    };
}),
on(customIncrement,(state,action)=>{
    return{
        ...state,
        counter:action.action=='add'?state.counter+action.value:state.counter-action.value
    };
}),
on(changeChanelName,(state,action)=>{
    return{
        ...state,
        chanelName:action.chanel
    };
}))


export function counterReducer(state:any,action:any){
    return _counterReducer(state,action)
}