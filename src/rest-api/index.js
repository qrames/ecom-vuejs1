import axios from 'axios'
import settings from './settings.json'

const apiRest = axios.create({
    baseURL: settings.baseURL + 'my_ecom',
    headers: {
      //common['Authorization']: 'AUTH_TOKEN',
    },
    //headers.common['Authorization'] = AUTH_TOKEN;
    //defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    timeout: 5000,
})

export { apiRest }


