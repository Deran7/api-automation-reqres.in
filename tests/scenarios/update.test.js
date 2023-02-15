import chai, { assert, expect } from "chai";
import jsonSchema from "chai-json-schema";
import bookingApi from "$pages/booking.api.js";
import * as data from "$data/create.data.js";
import * as schema from "$schema/update.schema.js";

chai.use(jsonSchema)


describe('Update booking positif case', () => {
    
    it('Should success update booking data with valid booking id', async () => {
        const response = await bookingApi.update(2, data.VALID_UPDATE_BOOKING)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_BOOKING_RESPONSE_SCHEMA)
    });
})
