import { stringify } from "query-string";

/*The Base URL to Communciate with Rest API*/
const baseURL = "http://localhost:8080";

/**
* Checks that the status of the response is
* in the 200 range.
*
* @param {Response} response
*/
const statusCheck = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    return "Exception occured in Request";
};

/**
 * An HTTP GET request.
 *
 * Wraps the fetch function, sets the credentials to same origin,
 * and includes a tranformation to json in its Promise chain.
 *
 * @param {string} uri
 * 		The URI to which the request is to be made.
 * @param {Object} [options={}]
 * 		A set of options to include with the fetch call.
 * @returns The Promise containing the json response.
 */

const get = (uri) => (

    fetch(baseURL + uri)
        .then(statusCheck)
        .then(response => response.json())
        .then(data => {
            return new Promise((resolve, reject) => {
                // promise resolves with no errors
                resolve(data)
            })
        })
);

/**
 * An HTTP POST request.
 *
 * Wraps the fetch function, sets the credentials to same origin,
 * sets the method to POST, and includes a transformation to json
 * in its Promise chain.
 *
 * @param {string} uri
 * 		The URI to which the request is to be made.
 * @param {Object} body
 * 		The JSON representation of the request body.
 * @param {Object} [options={}]
 * 		A set of options to include with the fetch call.
 */
const post = (uri, body, options = {}) =>
    fetch(baseURL + uri, Object.assign({
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": "token-value",
        },
        body: JSON.stringify(body)
    }, options)).then(statusCheck);

/**
 * An HTTP PUT request.
 *
 * Wraps the fetch function, sets the credentials to same origin,
 * sets the method to PUT, and includes a transformation to json
 * in its Promise chain.
 *
 * @param {string} uri
 * 		The URI to which the request is to be made.
 * @param {Object} body
 * 		The JSON representation of the request body.
 * @param {Object} [options={}]
 * 		A set of options to include with the fetch call.
 */
const put = (uri, body, options = {}) =>
    post(uri, body, Object.assign({}, options, { method: 'PUT' }));

/**
 * An HTTP DELETE request.
 *
 * Wraps the fetch function, sets the credentials to same origin,
 * sets the method to DELETE, and includes a transformation to json
 * in its Promise chain.
 *
 * @param {string} uri
 * 		The URI to which the request is to be made.
 * @param {Object} body
 * 		The JSON representation of the request body.
 * @param {Object} [options={}]
 * 		A set of options to include with the fetch call.
 */
 const del = (uri) =>
 fetch(baseURL + uri, Object.assign({
     method: 'DELETE',
     credentials: 'same-origin',
     headers: {
         'Content-Type': 'application/json',
         "x-access-token": "token-value",
     }
 })).then(statusCheck);

export { get, post, put, del, statusCheck };
