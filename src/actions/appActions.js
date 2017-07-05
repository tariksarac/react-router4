import { GET_APPS_SUCCESS } from './types/index';

const apps = [
    {
        id: 1,
        name: '__tests__ app 1',
        description: 'description of __tests__ app 1'
    },
    {
        id: 2,
        name: '__tests__ app 2',
        description: 'description of __tests__ app 2'
    },
    {
        id: 3,
        name: '__tests__ app 3',
        description: 'description of __tests__ app 3'
    }
]

/**
 * Get apps
 */
export function getApps() {
    return function (dispatch) {
        // axios.post(`${API_URL}/apps`)
        //     .then(() => {
        //         dispatch({ type: GET_APPS_SUCCESS });
        //
        //     })
        //     .catch(response => {
        //         dispatch(type: GET_APPS_FAILURE, 'getting error')
        //     });

        //FOR TEST PURPOSE
        dispatch({type: GET_APPS_SUCCESS, payload: apps})
    }
}