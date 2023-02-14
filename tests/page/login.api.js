import BaseAPI from "$pages/base.api.js";


const loginApi = {
    login: (data) => BaseAPI.post ('/login', data)
}

export default loginApi;