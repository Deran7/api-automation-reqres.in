import BaseAPI from "$pages/base.api";


const listuserApi = {
    list_users: (param) => BaseAPI.get(`/users?page=${param}`),
    single_users: (param) => BaseAPI.get(`/users/${param}`),
    list_resource: ()

}