import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://posts-3d203.firebaseio.com/'
});

export default axiosOrders;