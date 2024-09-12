import { createReducer, on } from "@ngrx/store";
import { Article } from "../../core/article.model.js";
import { HomeActions } from "./home.actions.js";

export interface HomeState {
  articles: Article[],
  current: number,
  limit: number,
  loading: boolean
}
const initialState: HomeState = {
  articles: [],
  current: 1,
  limit: 3,
  loading: false
}
export const homeReducer = createReducer(
  initialState,
  on(HomeActions.setArticles, (state, { articles }) => {
    return { ...state, articles, loading: false }
  }),
  on(HomeActions.loadMore, (state) => {
    const total = state.articles.length / state.limit
    const _current = (state.current < total ) ? state.current + 1 : total
    
    return { ...state, current: _current, loading: true }
  })
)