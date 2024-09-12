import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from '../../../core/article.model.js';
import { createReducer, on } from '@ngrx/store';
import { ArticleApiActions } from './article.actions.js';

export const articleAdapter: EntityAdapter<Article> = createEntityAdapter<Article>()
export interface ArticleState extends EntityState<Article> {
  articles: Article[],
  loading: boolean,
  error: string | null,
}
const initialState: ArticleState = articleAdapter.getInitialState({
  articles: [],
  loading: false,
  error: null
})
export const articleReducer = createReducer(
  initialState,
  on(ArticleApiActions.loadArticles, (state) => 
    ({ ...state, loading: true })
  ),
  on(ArticleApiActions.loadArticlesSuccess, (state, { articles }) => 
    articleAdapter.setAll(articles, { ...state, loading: false })
  ),
  on(ArticleApiActions.loadArticlesFailure, (state, { error }) => 
    ({ ...state, loading: false, error: error })
  )
)