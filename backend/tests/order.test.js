const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../src/app');
const services = require('../src/services');
const { ordersMock } = require('./mocks/order.mocks');

chai.use(chaiHttp);

const { expect } = chai;

describe('Order table endpoints tests', async () => {
  let chaiHttpResponse;
  afterEach(sinon.restore);
  it('Find orders tests', async () => {
    sinon.stub(services.orderService, 'findAll').resolves(ordersMock);
    chaiHttpResponse = await chai.request(app).get('/orders');
    expect(chaiHttpResponse.body).to.be.deep.equal(ordersMock);
    expect(chaiHttpResponse).to.have.status(200);
  });
});
