import axios from 'axios';
import { DATA_FILTER } from '../utils/ActionTypes';

const filterByPrice = (price) => {
    const api = `https://sephora-api-frontend-test.herokuapp.com/products?filter[price_lt]=${price}`;
    return dispatch => {
        return axios.get(api)
            .then((res) => {
                dispatch({ type: DATA_FILTER, payload: res.data })
            })
    }
};

export default filterByPrice;