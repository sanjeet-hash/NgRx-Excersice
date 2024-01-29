import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChanelName, decrement, increment, reset } from '../../shared/store/counter.action';
import { MatModule } from '../../materialModule/mat.module';
import { counterModel } from '../../shared/store/counter.model';
import { CounterDIsplayComponent } from '../counter-display/counter-display.component';
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [MatModule,CounterDIsplayComponent,CustomCounterComponent],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss'
})
export class CounterButtonComponent {
constructor(private store:Store<{counter:counterModel}>){//here inject the store from ngrx


}

//here dispatch the store data and call the action on click
  onIncrement(){

    this.store.dispatch(increment())
    
  }

  onDecrement(){
    
    this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }

  onRename(){
    this.store.dispatch(changeChanelName({chanel:'Welcome sanju techies'}))
  }

}
