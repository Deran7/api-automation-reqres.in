import chai, { assert, expect } from "chai";
import jsonSchema from "chai-json-schema";
import bookingApi from "$pages/booking.api.js";
import * as data from "$data/create.data.js";
import * as schema from "$schema/create.schema.js";

chai.use(jsonSchema)

describe('Create booking positif case', () => {
    
    it('Succesfull creat new booking ', async () => {
        const response = await bookingApi.create(data.VALID_CREATE_BOOKING)

        console.log('=============');

        assert.equal(response.status, 201)
        expect(response.data).to.be.jsonSchema(schema.VALID_CREATE_BOOKING_RESPONSE_SCHEMA)
    });
})