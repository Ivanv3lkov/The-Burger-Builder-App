import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-79ea0-default-rtdb.firebaseio.com/'
});

export default instance;