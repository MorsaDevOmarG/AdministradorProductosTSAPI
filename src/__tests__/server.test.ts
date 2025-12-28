// describe('Nuestro primer test', () => {
//   it('Debe revisar que 1 + 1 es 2', () => {
//     expect(1 + 1).toBe(2);
//   });

//   it('Debe revisar que 1 + 1 no sean 3', () => {
//     expect(1 + 1).not.toBe(3);
//   });
// });

import request from 'supertest';
import server from '../server';

describe('GET /api', () => {
  it('Debe responder con un mensaje de funcionamiento de la API', async () => {
    const response = await request(server).get('/api');
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toMatch(/json/);
    expect(response.body.msg).toBe('API de Productos funcionando');
    expect(response.status).not.toBe(404);
    expect(response.body.msg).not.toBe('api de productos funcionando');

    // console.log(response);
    // console.log(response.status);
    // console.log(response.header['content-type']);
    // console.log(response.text);
    // console.log(response.body);
    // console.log(response.body.msg);
  });
});