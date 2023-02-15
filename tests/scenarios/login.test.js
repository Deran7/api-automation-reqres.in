import { assert } from "chai";
import loginApi from "$pages/login.api.js";
import * as data from "$data/login.data.js"

describe('Login positif case', () => {

    it('Succesfull login with email and password registed', async () => {
        const response = await loginApi.login(data.VALID_LOGIN_WITH_EMAIL_AND_PASSWORD_REGISTED)

        assert.equal(response.status, 200)
    });
})

describe('Login negatif case', () => {


    it('Failed login with email not registed and password registed', async () => {
        const response = await loginApi.login(data.INVALID_LOGIN_WITH_EMAIL_NOT_REGISTED_AND_PASSWORD_REGISTED)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "user not found")
    });

    it('Failed login with email and password not registed', async () => {
        const response = await loginApi.login(data.INVALID_LOGIN_WITH_EMAIL_AND_PASSWORD_NOT_REGISTED)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "user not found")
    });

    it('Failed login with email registed and password empty', async () => {
        const response = await loginApi.login(data.INVALID_LOGIN_WITH_EMAIL_REGISTED_AND_PASSWORD_EMPTY)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "Missing password")
    });

    it('Failed login with email empty and password registed', async () => {
        const response = await loginApi.login(data.INVALID_LOGIN_WITH_EMAIL_EMPTY_AND_PASSWORD_REGISTED)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "Missing email or username")
    });

    it('Failed login with email and password empty', async () => {
        const response = await loginApi.login(data.INVALID_LOGIN_WITH_EMAIL_AND_PASSWORD_EMPTY)

        assert.equal(response.status, 400)
        assert.equal(response.data.error, "Missing email or username")
    });
    })
