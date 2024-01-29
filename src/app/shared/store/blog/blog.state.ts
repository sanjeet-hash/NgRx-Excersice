import { blogModel, blogs } from './blog.model';

//this data in the array form
// export const blogState:blogModel[]=[
//     {id:1,title:'Angular',description:'Angular is free open source powered by Google'},
//     {id:2,title:'React',description:'React is free open source powered by Meta'},
//     {id:3,title:'.Net',description:'.Net is free open source powered by Microsoft'}

// ]

//here we make it an object
export const blogState: blogs = {
  blogList: [],
  errorMessage:''
};
