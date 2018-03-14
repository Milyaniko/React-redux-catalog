import axios from 'axios';
import { DATA_FILTER } from '../utils/ActionTypes';

const filterByCategory = (product) => {
    const api = `https://sephora-api-frontend-test.herokuapp.com/products?filter[category_eq]=${product}`;
    return dispatch => {
        return axios.get(api)
        .then((res) => {
            dispatch({ type: DATA_FILTER, payload: res.data})
        })
    }
};

export default filterByCategory;