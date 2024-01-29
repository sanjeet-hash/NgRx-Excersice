import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDIsplayComponent } from './counter-display.component';

describe('CounterDIsplayComponent', () => {
  let component: CounterDIsplayComponent;
  let fixture: ComponentFixture<CounterDIsplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDIsplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterDIsplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
