import chai, { assert } from "chai";
import bookingApi from "$pages/booking.api.js";


describe ( 'Delete booking positif case',() => {
    it('Succesfull Delete Booking by id registed', async () => {
        const response = await bookingApi.deleteBooking(2)

        assert.equal(response.status, 204),
        assert.equal(response.statusText, 'No Content')
    })
}) 