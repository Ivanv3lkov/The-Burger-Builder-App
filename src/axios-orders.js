import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-bulilder-2020-default-rtdb.firebaseio.com/'
});

export default instance;