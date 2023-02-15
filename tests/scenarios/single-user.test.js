import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import {getParams} from '$helpers/lib.api.js';
import usersApi from '$pages/list.user.api.js';
import * as data from '$data/list.user.data.js';
import * as schema from '$root/schema/single-users.schema.js';

chai.use(jsonSchema);

describe('Single users',() => {

    it('Should succesfuly get single users', async () => {
        const param = getParams(data.VALID_SINGLE_USERS_PARAM['users']);
        const response = await usersApi.single_users(param);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_SINGLE_USERS_RESPONSE_SCHEMA);
    });
});