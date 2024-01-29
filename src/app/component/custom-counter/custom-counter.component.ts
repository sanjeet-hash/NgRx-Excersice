import { Component } from '@angular/core';
import { MatModule } from '../../materialModule/mat.module';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/counter.action';
import { counterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getChanelName } from '../../shared/store/counter.selector';//here we import selector and use here

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [MatModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss',
})
export class CustomCounterComponent {
  constructor(private store: Store<{ counter: counterModel }>) {}
  
  counterInput!: number;
  actionType: string = 'add';
  cName: any;
  counterSubscribe!: Subscription;

  ngOnInit() {
    this.store.select(getChanelName).subscribe((data) => {
      // console.log(data);
      this.cName = data;
      console.log('custom counter')
    });
  }
  onIncrement() {
    this.store.dispatch(
      customIncrement({ value: +this.counterInput, action: this.actionType })
    );
  }
}
