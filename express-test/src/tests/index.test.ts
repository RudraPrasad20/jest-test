
import {describe, expect, it} from "@jest/globals"
import  request  from "supertest";
import { app } from "..";

describe('POST /sum', function() {
    it('should return the sum of 2 numbers', function(done) {
        request(app)
        .post('/sum')
        .send({a: 2, b: 4})
        .expect(200, done);
    });

  });