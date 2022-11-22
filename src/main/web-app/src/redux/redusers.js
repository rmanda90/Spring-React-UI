import { combineReducers } from 'redux';

import {
    FETCH_STUDNETS_REQUEST, FETCH_STUDNETS_SUCCESS, FETCH_STUDNETS_FAILURE,
    FETCH_BY_ID_REQUEST, FETCH_BY_ID_SUCCESS, FETCH_BY_ID_FAILURE,
    POST_STUDNET_REQUEST, POST_STUDNET_SUCCESS, POST_STUDNET_FAILURE,
    DELETE_STUDNET
} from "../components/students/student.actions";
import exceptions from './Exceptions/exception.reducer';

/**
 * isFetching : true / false -> to load the spinner
 * data : is the list of data to populate on page
 * results : SUCCESS / ERROR -> to know the https call status
 */
const initialResults = { isFetching: false, data: [], status: '' };

export const studentsreducer = (state = initialResults, action) => {
    switch (action.type) {
        case FETCH_STUDNETS_REQUEST: return {
            ...state,
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case FETCH_STUDNETS_SUCCESS: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case FETCH_STUDNETS_FAILURE: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case FETCH_BY_ID_REQUEST: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case FETCH_BY_ID_SUCCESS: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case FETCH_BY_ID_FAILURE: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case POST_STUDNET_REQUEST: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case POST_STUDNET_SUCCESS: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case POST_STUDNET_FAILURE: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        case DELETE_STUDNET: return {
            isFetching: action.isFetching,
            data: action.data,
            status: action.status
        }
        default: return state
    }
}


const rootReducer = combineReducers(
    {
        student: studentsreducer,
        exceptions : exceptions
    }
)

export default rootReducer;