import { QueryCache, QueryClient } from 'react-query';
import axios from 'axios';

import { API_URL } from '../config/constants';


const axiosInstance = axios.create({
    baseURL: API_URL
});

export { axiosInstance };

export const endPoints = {
    todos: 'todos',
    todos_add: 'todos/add',
    login: 'auth/login'
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 1000 * 60 * 60 // 1 hour
        }
    }
});

