import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './states/app.state';
import { selectCount } from './states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('ngrx-counter');
  count$: Observable<number>;
  // counterStore = inject(CounterStore);

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }
}
