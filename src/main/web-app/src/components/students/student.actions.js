import { del, get, post } from '../../services/HTTPService';
import { stringify } from 'query-string';

/**
 * To get the All details
 */
//Actions
export const FETCH_STUDNETS_REQUEST = 'FETCH_STUDNETS_REQUEST'
export const FETCH_STUDNETS_SUCCESS = 'FETCH_STUDNETS_SUCCESS'
export const FETCH_STUDNETS_FAILURE = 'FETCH_STUDNETS_FAILURE'

//Action Creators 
const loadAllStudentsRequest = () => {
    return {
        type: FETCH_STUDNETS_REQUEST,
        isFetching: true,
        data: [],
        status: 'LOADING DATA FROM STUENDETS REQUEST...'
    }
}

const fetchStudentsSuccess = (payload) => {
    return {
        type: FETCH_STUDNETS_SUCCESS,
        isFetching: false,
        data: payload,
        status: 'SUCCESSFULLY FETCHED DATA FROM STUENDETS REQUEST'
    }
}

const fetchStudentsFailure = (error) => {
    return {
        type: FETCH_STUDNETS_FAILURE,
        isFetching: false,
        data: [],
        status: 'ERROR'
    }
}

/** 
 * This function is an action creator
 * Here redux thunk will alows to return a function insted of defult action
 * and thunk provide us an option this function to perform side effects like api calls
 * and the retunr function will have a parmeter dispathc means from that we can dispathc an action
*/
export const loadAllStudents = (query) => {
    return (dispatch) => {
        dispatch(loadAllStudentsRequest());
        /**
         * Here we can make a async call to get the data
         */
        get(query).then((response) => {
            dispatch(fetchStudentsSuccess(response));
        }).catch(error => {
            dispatch(fetchStudentsFailure(error));
        });
    }
}

/**
 * To get the details by ID
 */
export const FETCH_BY_ID_REQUEST = 'FETCH_BY_ID_REQUEST'
export const FETCH_BY_ID_SUCCESS = 'FETCH_BY_ID_SUCCESS'
export const FETCH_BY_ID_FAILURE = 'FETCH_BY_ID_FAILURE'

const fetchStudentByIdRequest = () => {
    return {
        type: FETCH_BY_ID_REQUEST,
        isFetching: true,
        data: [],
        status: 'LOADING BASEDON ID REQUEST...'
    }
}

const fetchStudentByIdSuccess = (payload) => {
    return {
        type: FETCH_BY_ID_SUCCESS,
        isFetching: false,
        data: (payload) ? [payload] : [],
        status: 'SUCCESS'
    }
}

const fetchStudentByIdFailure = (error) => {
    return {
        type: FETCH_BY_ID_FAILURE,
        isFetching: false,
        data: [],
        status: 'ERROR'
    }
}

export const fetchStudentById = (query) => {
    return (dispatch) => {
        dispatch(fetchStudentByIdRequest());
        /**
         * Here we can make a async call to get the data
         */
        get(query).then((response) => {
            dispatch(fetchStudentByIdSuccess(response));
        }).catch(error => {
            dispatch(fetchStudentByIdFailure(error));
        });
    }
};

/**
 * To POST data to students
 */
export const POST_STUDNET_REQUEST = 'POST_STUDNET_REQUEST'
export const POST_STUDNET_SUCCESS = 'POST_STUDNET_SUCCESS'
export const POST_STUDNET_FAILURE = 'POST_STUDNET_FAILURE'

const postStudentRequest = () => {
    return {
        type: POST_STUDNET_REQUEST,
        isFetching: true,
        data: [],
        status: 'Posting Data...'
    }
}

const postStudentSuccess = (payload) => {
    return {
        type: POST_STUDNET_SUCCESS,
        isFetching: false,
        data: (payload.data) ? [payload.data] : [],
        status: 'SUCCESS'
    }
}

const psotStudentFailure = (error) => {
    return {
        type: POST_STUDNET_FAILURE,
        isFetching: false,
        data: [],
        status: 'ERROR'
    }
}

// export const updateStudent = (id, body, query) => (dispatch) => dispatch(postData(id, body, 'PUT', query));
export const sendStudent = (id, body, query) => {
    return (dispatch) => {
        dispatch(postStudentRequest());
        post(query, body).then((response) => {
            (response && response.includes('Exception')) ?
                dispatch(psotStudentFailure('error')) :
                dispatch(postStudentSuccess(response));
        }).catch(error => {
            dispatch(psotStudentFailure(error));
        });
    }
}

export const DELETE_STUDNET = 'DELETE_STUDNET'

const deleteStudentRequest = (payload) => {
    return {
        type: DELETE_STUDNET,
        isFetching: false,
        data: (payload.data) ? [payload.data] : [],
        status: (payload.status >= 200 && payload.status < 300) ? 'SUCCESS' : 'ERROR'
    }
}

export const removeStudnet = (query) => {
    return (dispatch) => {
        del(query).then((response) => {
            dispatch(deleteStudentRequest(response));            
        })
    }
}

export const deleteStudent = (query) => (dispatch) => dispatch(removeStudnet(query));

// (dispatch) => dispatch(postData(id, body, id ? 'PUT' : 'POST', query));
