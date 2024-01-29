import { blog } from "../blog/blog.reducer";
import { counterReducer } from "../counter.reducer";


//here we export the app state and import it to the store module in the provider
export const appState={
    counter:counterReducer,
    blog:blog
}