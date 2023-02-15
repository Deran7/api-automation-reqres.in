import chai, { assert, expect } from "chai";
import jsonSchema from "chai-json-schema";
import bookingApi from "$pages/booking.api.js";
import * as data from "$data/create.data.js";
import * as schema from "$schema/partial-update.schema.js";

chai.use(jsonSchema)

describe('Partial update booking positif case', () => {
    
    it('Should success partial update booking data with valid booking id ', async () => {
        const response = await bookingApi.partialUpdate(2, data.VALID_UPDATE_BOOKING)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_PARTIAL_UPDATE_BOOKING_RESPONSE_SCHEMA)
    });
})