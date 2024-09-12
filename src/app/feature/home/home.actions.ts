import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "../../core/article.model.js";

export const HomeActions = createActionGroup({
  source: 'home',
  events: {
    'setArticles': props<{ articles: Article[] }>(),
    'loadMore': emptyProps()
  }
})