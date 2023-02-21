import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import {getParams} from '$helpers/lib.api.js';
import usersApi from '$pages/list.user.api.js';
import * as data from '$data/list.user.data.js';
import * as schema from '$root/schema/single-users.schema.js';

chai.use(jsonSchema);

describe('Single users Positif Case',() => {

    it('Should succesfuly get single users', async () => {
        const response = await usersApi.single_users(2);
        
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_SINGLE_USERS_RESPONSE_SCHEMA);
    });
})

describe('Single Users Negatif Case', () => {

    it('Failed get single users', async () => {
        const response = await usersApi.singleusers_invalid(23)

        assert.equal(response.status, 200)
    });
})