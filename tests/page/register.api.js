import BaseAPI from "$pages/base.api.js";


const registerApi = {
    register: (data) => BaseAPI.post ('/register', data)
}

export default registerApi;