import { NUMBER } from "./action_constants";
import { POPULAR } from '../actions/action_constants';
import { TRENDING } from "./action_constants";
import { POPULAR_TV } from "./action_constants";


export function change_count(payload) {
    return {
        Type: NUMBER,
        payload:payload
    }
}

export function add_movie(payload) {
    return { type: POPULAR,payload:payload }
    
}

export function add_trending(payload) {
    return {
        type:TRENDING,payload:payload
    }
}

export function add_popular_tv(payload) {
    return {
        type:POPULAR_TV,payload:payload
    }
}