import { expect } from "chai";
import { it } from "mocha";
import supertest from "supertest";
import app from "../app.js";


it("Adding two numbers", function () {
    
    const num1=5;
    const num2=5;

    expect(num1+num2).to.equal(10);

})

describe('Test Login APi',()=>{
    it('User should return Status Code 200',async()=>{
        const response=await supertest(app).post(`/user/login`).send({
            u_email: "nasreenarif95@gmail.com",
            u_password: "123456789"
        });
        expect(response.status).to.equal(200);
    })

})
