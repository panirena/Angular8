import { increment, decrement, reset } from './../counter/actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html'
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }

}
