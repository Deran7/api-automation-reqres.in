import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import {getParams} from '$helpers/lib.api.js';
import usersApi from '$pages/list.user.api.js'
import * as data from '$data/list.user.data.js';
import * as schema from '$root/schema/list-users.schema.js';

chai.use(jsonSchema);

describe('List Users',() => {

    it('Should succesfuly get list users', async () => {
        const param = getParams(data.VALID_LIST_USERS_PARAMS['page']);
        const response = await usersApi.list_users(param);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_LIST_USERS_PARAMS_RESPONSE_SCHEMA);
    });
});