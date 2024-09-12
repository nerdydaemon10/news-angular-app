import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component.js';
import { Store } from '@ngrx/store';
import { selectArticles, selectLimit, selectLoading } from './home.selectors.js';
import { Observable } from 'rxjs';
import { Article } from '../../core/article.model.js';
import { HomeState } from './home.reducer.js';
import { HomeActions } from './home.actions.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, AsyncPipe, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  articles$: Observable<Article[]> = this.store.select(selectArticles)
  limit$: Observable<number> = this.store.select(selectLimit)
  loading$: Observable<boolean> = this.store.select(selectLoading)

  constructor(private store: Store<HomeState>) {}
  ngOnInit(): void {}
  loadMore(): void {
    this.store.dispatch(HomeActions.loadMore())
  }
}
