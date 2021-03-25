import request from 'supertest';
import {assert} from 'chai';

import createServer from 'server';

const app = createServer();

describe("server checks", () => {
    it("runs without error", (done) => {
        request(app).get('/').expect(200, done);
    })
})