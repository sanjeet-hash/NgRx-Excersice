import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";

//this are just variable.
export const load_Blog='[blog page] load blog'; 

export const load_Blog_Success='[blog page] load blog success';  

export const load_Blog_fail='[blog page] load blog fail'; 

export const add_BLog='[blog page] add blog'; 

export const add_Blog_Success='[blog page] add blog success';  



export const loadBlog=createAction(load_Blog); //to load static data.

export const loadBlogSuccess=createAction(load_Blog_Success,props<{blogList:blogModel[]}>()) //this action is to get blog data from Api.

export const loadBlogFail=createAction(load_Blog_fail,props<{errorText:string}>()) //when geting data is fail.

export const addBlog=createAction(add_BLog,props<{blogInput:blogModel}>()); //for add blogs.

export const addBlogSuccess=createAction(add_Blog_Success,props<{blogInput:blogModel}>()) //this action is to add blog data to Api.

export const updateBlog=createAction('updateBlog',props<{blogInput:blogModel}>()); //for update blogs.

export const deleteBlog=createAction('deleteBlog',props<{id:number}>());//to delete the blog.