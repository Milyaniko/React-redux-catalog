import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../utils/ActionTypes';

const fetchData = (size) => {
    const api = `https://sephora-api-frontend-test.herokuapp.com/products?page[size]=${size}`;
    return dispatch => {
        dispatch({ type: FETCH_DATA })

        return axios.get(api)
        .then((res) => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
        })
        .catch((error) => {
            dispatch({ type: FETCH_DATA_ERROR, payload: error})
        })
    }
};

export default fetchData;