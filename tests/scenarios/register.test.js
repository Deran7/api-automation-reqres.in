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
    
    it('Failed register with email not registed and password registed', async () => {
        const response = await registerApi.register(data.INVALID_REGISTER_WITH_EMAIL_NOT_REGISTED_AND_PASSWORD_REGISTED)

        assert.equal(response.status, 400)
        assert.isString(response.data.error, "Note: Only defined users succeed registration")
    });

    it('Failed register with email registed and password empty', async () => {
        const response = await registerApi.register(data.INVALID_REGISTER_WITH_EMAIL_REGISTED_AND_PASSWORD_EMPTY)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "Missing password")
    });

    it('Failed register with email empty and password registed', async () => {
        const response = await registerApi.register(data.INVALID_REGISTER_WITH_EMAIL_EMPTY_AND_PASSWORD_REGISTED)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "Missing email or username")
    });

    it('Failed register with email and password empty', async () => {
        const response = await registerApi.register(data.INVALID_REGISTER_WITH_EMAIL_AND_PASSWORD_EMPTY)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "Missing email or username")
    });
})
