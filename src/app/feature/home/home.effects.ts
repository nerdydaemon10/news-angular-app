import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticleApiActions } from "../../shared/states/article/article.actions.js";
import { delay, map, of, switchMap } from "rxjs";
import { Store } from "@ngrx/store";
import { ArticleState } from "../../shared/states/article/article.reducer.js";
import { selectArticles } from "../../shared/states/article/article.selectors.js";
import { HomeActions } from "./home.actions.js";

@Injectable()
export class HomeEffects {
  articles$ = this.store.select(selectArticles)
  setArticles$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ArticleApiActions.loadArticlesSuccess),
      switchMap(() =>
        this.articles$.pipe(
          map((articles) => HomeActions.setArticles({ articles: articles })),
        )
      )
    )
  )
  constructor(
    private actions$: Actions,
    private store: Store<ArticleState>
  ) {}
}