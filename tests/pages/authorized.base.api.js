import dotenv from 'dotenv';
import axios from 'axios';
import bookingApi from "$pages/booking.api.js";
import {VALID_CREATE} from "$data/create.data.js"


dotenv.config();

const generateToken = await bookingApi.createToken(VALID_CREATE)

const AuthorizeAPI = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Cookie":`token=${generateToken.data.token}`,
        "Authorization": `Basic ${generateToken.data.token}`
    },
    validateStatus: function () {
        return true;
    }
});