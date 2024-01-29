import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss',
})
export class CounterDIsplayComponent {
  constructor(private store: Store<{ counter: counterModel }>) {}

  counterDisplay!: number;
  counterSubscribe!: Subscription;
  counter$!: Observable<counterModel>;

  //here we display the value and get the responce from store and 
  ngOnInit() {
    this.store.select(getCounter).subscribe((data) => {
      this.counterDisplay = data;
      console.log('counter display')
    });
  }

  ngOndestroy() {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }
}
