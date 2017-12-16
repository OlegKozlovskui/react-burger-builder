import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-18a02.firebaseio.com/'
});

export default instance;