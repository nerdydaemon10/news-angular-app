import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component.js';
import { Title } from '@angular/platform-browser';
import { ArticleState } from './shared/states/article/article.reducer.js';
import { Store } from '@ngrx/store';
import { ArticleApiActions } from './shared/states/article/article.actions.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'News Angular';
  
  constructor(
    private titleService: Title,
    private store: Store<ArticleState>
  ) {
    this.titleService.setTitle(this.title)
  }
  ngOnInit(): void {
    this.store.dispatch(ArticleApiActions.loadArticles())
  }
}
