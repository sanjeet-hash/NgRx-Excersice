import { blogs } from "../blog/blog.model";
import { counterModel } from "../counter.model";

export interface appStateModel{
    counter:counterModel,
    blog:blogs
}