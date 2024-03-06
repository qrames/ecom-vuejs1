import axios from 'axios'
import { baseURL } from './setting-api'

const apiRest = axios.create({
    baseURL: baseURL + 'my_ecom',
    headers: {
      //common['Authorization']: 'AUTH_TOKEN',
    },
    //headers.common['Authorization'] = AUTH_TOKEN;
    //defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    timeout: 5000,
})

export { apiRest }


