import BaseAPI from "$pages/base.api.js";


const usersApi = {
    list_users: (param) => BaseAPI.get(`/users?page=${param}`),
    single_users: (param) => BaseAPI.get(`/users=${param}`),
    list_resource: (param) => BaseAPI.get(`/unknown=${param}`),
    single_resource: (param) => BaseAPI.get(`/unknown=${param}`),
    delayedResponse: (param) => BaseAPI.get (`/users?delay=${param}`)

}

export default usersApi;