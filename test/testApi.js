const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app.js');

describe('POST' /posts, () =>{
    // before((done) =>{
    //     app.connect()
    //     .catch((err) => done(err));
    // })

    it('it should connect and create posts', (done) =>{
        request.agent(app).post('/posts')
        .send({name: 'I', dob: '18/07/1993', address: '1/100', description: 'aws', createdAt: '12/11/1109'})
        .then((res) =>{
            const body = res.body;
            expect(body).to.contain.property('_id');
            expect(body).to.contain.property('name');
            expect(body).to.contain.property('dob');
            expect(body).to.contain.property('address');
            expect(body).to.contain.property('description');
            expect(body).to.contain.property('createdAt');
            done();
        })

    })


})