import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "./home.reducer.js";
import { articleAdapter, ArticleState } from "../../shared/states/article/article.reducer.js";

const homeState = createFeatureSelector<HomeState>('home')
const articleState = createFeatureSelector<ArticleState>('article')

const { selectAll } = articleAdapter.getSelectors(articleState)

export const selectArticles = createSelector(
  homeState, selectAll, 
  (state, articles) => {
    const end = state.current * state.limit
    return articles.slice(0, end)
  }
)

export const selectLimit = createSelector(
  homeState,
  (home) => home.limit
)
export const selectLoading = createSelector(
  homeState,
  articleState,
  (home, article) => article.loading
)