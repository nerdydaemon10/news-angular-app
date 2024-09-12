import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "../../../core/article.model.js";

export const ArticleApiActions = createActionGroup({
  source: 'article',
  events: {
    'loadArticles': emptyProps(),
    'loadArticlesSuccess': props<{ articles: Article[] }>(),
    'loadArticlesFailure': props<{ error: string | null }>()
  }
})