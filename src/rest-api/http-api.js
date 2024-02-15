import axios from 'axios'


const apiRest = axios.create({
    baseURL: 'http://127.0.0.1:8000/my_ecom',
    headers: {
      //common['Authorization']: 'AUTH_TOKEN',
    },
    //headers.common['Authorization'] = AUTH_TOKEN;
    //defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    timeout: 5000,
})

export { apiRest }


