import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NewsApiService } from "../../../core/news-api.service.js";
import { ArticleApiActions } from "./article.actions.js";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ArticleEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleApiActions.loadArticles),
      switchMap(() =>
        this.service.loadArticles().pipe(
          map((articles) => ArticleApiActions.loadArticlesSuccess({ articles: articles })),
          catchError(error => of(ArticleApiActions.loadArticlesFailure({ error })))
        )
      )
    )
  )
  constructor(
    private actions$: Actions,
    private service: NewsApiService
  ) {}
}