import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-d6d92.firebaseio.com/'
});

export default instance
