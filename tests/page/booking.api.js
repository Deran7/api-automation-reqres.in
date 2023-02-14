import BaseAPI from "$pages/base.api.js";
import AuthorizedAPI from "$pages/authorized.base.api.js"

const bookingApi = {
    create: (data) => BaseAPI.post ('/users', data),
    update: (id, payload) => AuthorizedAPI.put(`/users/${id}`, payload),
    partialUpdate: (id, payload) => AuthorizedAPI.patch(`/users/${id}`, payload)
}

export default bookingApi;