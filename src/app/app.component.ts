import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { CounterDIsplayComponent } from './component/counter-display/counter-display.component';
import { MatModule } from './materialModule/mat.module';
import { CustomCounterComponent } from './component/custom-counter/custom-counter.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { HeaderComponent } from './layouts/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatModule,CounterButtonComponent,CounterDIsplayComponent,CustomCounterComponent,BlogsComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngRx';
}
  