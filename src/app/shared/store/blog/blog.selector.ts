import { createFeatureSelector, createSelector } from '@ngrx/store';
import { blogModel, blogs } from './blog.model';

//this resducer is use when data are in the form of array
// const getBLogState=createFeatureSelector<blogModel[]>('blog');

// export const getBlog=createSelector(getBLogState,(state)=>{
//     return state


//this reducer is use for object
const getBLogState = createFeatureSelector<blogs>('blog');

export const getBlog = createSelector(getBLogState, (state) => {
  return state.blogList;
});

export const getBlogByID =(blodId:number)=> createSelector(getBLogState, (state) => {
  return state.blogList.find((blog:blogModel)=>blog.id==blodId) as blogModel
});

export const getBlogInfo = createSelector(getBLogState, (state) => {
  return state;
});
