import { GET_APPS_SUCCESS, GET_APPS_FAILURE } from '../actions/types/index';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_APPS_SUCCESS:
            return { ...state, apps: action.payload };
        case GET_APPS_FAILURE:
            return { ...state, appsError:  action.payload  };
        default:
            return state
    }

}