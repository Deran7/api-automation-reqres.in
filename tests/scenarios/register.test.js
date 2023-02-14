import { assert } from "chai";
import registerApi from "$pages/register.api.js";
import * as data from "$data/register.data.js";

describe('Register positif case', () => {
    
    it('Succesfull register with email and password registed', async () => {
        const response = await registerApi.register(data.VALID_REGISTER_WITH_EMAIL_AND_PASSWORD_REGISTED)

        assert.equal(response.status, 200)
    });
})

describe('Register negatif case', () => {
    
    it('Failed register with email registed and password not registed', async () => {
        const response = await registerApi.register(data.INVALID_REGISTER_WITH_EMAIL_REGISTED_AND_PASSWORD_NOT_REGISTED)

        assert.equal(response.status, 200)
    });
})