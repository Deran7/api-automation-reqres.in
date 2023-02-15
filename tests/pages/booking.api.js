import BaseAPI from "$pages/base.api.js";

const bookingApi = {
    create: (data) => BaseAPI.post ('/users', data),
    update: (id, payload) => BaseAPI.put(`/users/${id}`, payload),
    partialUpdate: (id, payload) => BaseAPI.patch(`/users/${id}`, payload),
    deleteBooking : (id) => BaseAPI.delete(`/booking/${id}`)
}

export default bookingApi;