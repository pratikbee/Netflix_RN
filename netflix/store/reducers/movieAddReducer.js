import { POPULAR } from '../actions/action_constants';
import { TRENDING } from '../actions/action_constants';
import { POPULAR_TV } from '../actions/action_constants';

INITIAL_STATE ={};

export function Movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POPULAR:
      return { ...state, popularMovie: action.payload };
    
    case TRENDING:
      return {
        ...state,trendingMovie:action.payload
      }
    
    case POPULAR_TV:
      return {
        ...state,popularTV:action.payload
      }
    

    default:
      return state;
  }
}
