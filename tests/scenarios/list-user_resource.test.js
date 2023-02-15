import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import {getParams} from '$helpers/lib.api.js';
import usersApi from '$pages/list.user.api.js'
import * as data from '$data/list.user.data.js';
import * as schema from '$root/schema/list-users-resource.schema.js';

chai.use(jsonSchema);

describe('List user resource',() => {

    it('Should succesfuly get list users resource', async () => {
        const param = getParams(data.VALID_LIST_USERS_RESOURCE_PARAM['unknown']);
        const response = await usersApi.list_resource(param);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_LIST_USERS_RESOURCE_PARAM_RESPONSE_SCHEMA);
    });
});