import tab,{TabState}  from './tabs/tabs.reducer'
import { combineReducers } from 'redux';
export interface IRootState {
  readonly tab: TabState;
}
const rootReducer = combineReducers<IRootState>({
  tab,
});

export default rootReducer;
