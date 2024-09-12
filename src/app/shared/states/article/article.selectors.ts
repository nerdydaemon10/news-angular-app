import { createFeatureSelector } from "@ngrx/store";
import { articleAdapter, ArticleState } from "./article.reducer.js";

const articleState = createFeatureSelector<ArticleState>('article')

export const { 
  selectAll: selectArticles 
} = articleAdapter.getSelectors(articleState)