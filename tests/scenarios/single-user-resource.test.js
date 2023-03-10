import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import {getParams} from '$helpers/lib.api.js';
import usersApi from '$pages/list.user.api.js'
import * as data from '$data/list.user.data.js';
import * as schema from '$root/schema/list-users-resource.schema.js';

chai.use(jsonSchema);

describe('Single users resource',() => {

    it('Should succesfuly get single users resource', async () => {
        const param = getParams(data.VALID_SINGLE_USERS_RESOURCE_PARAM['unknown']);
        const response = await usersApi.list_resource(param);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_LIST_USERS_RESOURCE_PARAM_RESPONSE_SCHEMA);
    });
});