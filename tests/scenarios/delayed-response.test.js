import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import {getParams} from '$helpers/lib.api.js';
import usersApi from '$pages/list.user.api.js'
import * as data from '$data/list.user.data.js';
import * as schema from '$schema/delayed-response.schema.js';

chai.use(jsonSchema);

describe('Delayed response',() => {

    it('Should succesfuly delayed response', async () => {
        const param = getParams(data.VALID_DELAYED_RESPONSE_PARAM['delay']);
        const response = await usersApi.list_resource(param);

        assert.equal(response.status, 200)
    });
});