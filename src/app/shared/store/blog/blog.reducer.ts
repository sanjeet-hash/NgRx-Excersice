import { createReducer, on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { addBlog, addBlogSuccess, deleteBlog, loadBlog, loadBlogFail, loadBlogSuccess, updateBlog } from "./blog.action";
import { blogModel } from "./blog.model";


const _blogReducer=createReducer(blogState,
    on(loadBlog,(state)=>{
    return{
        ...state,
    };
}),
// on(addBlog,(state,action)=>{
//     const _blog={...action.blogInput}
//     _blog.id=state.blogList.length+1;
//     return{
//         ...state,
//         blogList:[...state.blogList,_blog]
//     };
// }),
on(addBlogSuccess,(state,action)=>{
    const _blog={...action.blogInput}
    return{
        ...state,
        blogList:[...state.blogList,_blog]
    };
}),
on(loadBlogSuccess,(state,action)=>{
    return{
        ...state,
        blogList:[...action.blogList],
        errorMessage:''
    };
}),
on(loadBlogFail,(state,action)=>{
    return{
        ...state,
        blogList:[],
        errorMessage:action.errorText
    };
}),
on(updateBlog,(state,action)=>{
    const _blog={...action.blogInput}
    const updatedBlog=state.blogList.map(blog=>{
        return _blog.id===blog.id?_blog:blog;
    })
    return{
        ...state,
        blogList:updatedBlog
    };
}),

on(deleteBlog,(state,action)=>{
    const updatedBlog=state.blogList.filter((data:blogModel)=>{
        return data.id!=action.id
    })
    
    return{
        ...state,
        blogList:updatedBlog
    };
}),
)


export function blog(state:any,action:any){
    return _blogReducer(state,action)
}