import request from 'supertest';
import {assert} from 'chai';

import createServer from 'server';

const app = createServer();

describe("Auth Routes", () => {
    it("/auth responds with 200", (done) => {
        request(app).get('/auth').expect(200, done);
    })
})

describe("Health Routes", () => {
    it("/health responds with 200", (done) => {
        request(app).get('/health').expect(200, done);
    })
})