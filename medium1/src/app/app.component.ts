import { decrement, increment } from './actions/counter.actions';
import { AppState } from './reducers/index';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCount } from './selectors/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medium1';
  count$: Observable<number>;

  constructor(private store: Store<AppState>)
  {
    this.count$ = this.store.pipe(select(getCount));
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }
  increment(): void {
    this.store.dispatch(increment());
 }
 ngOnInit(): void {
    this.increment();
 }
}

