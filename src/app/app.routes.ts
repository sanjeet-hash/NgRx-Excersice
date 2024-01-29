import { Routes } from '@angular/router';
import { CounterDIsplayComponent } from './component/counter-display/counter-display.component';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { BlogsComponent } from './component/blogs/blogs.component';

export const routes: Routes = [
    {path:'counter',component:CounterButtonComponent},
    {path:'blogs',component:BlogsComponent}
];
