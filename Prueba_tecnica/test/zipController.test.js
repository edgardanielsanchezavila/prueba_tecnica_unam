// test/zipController.test.js
const request = require('supertest');
const express = require('express');
const app = require('../app'); // Asegúrate de exportar tu app en app.js

describe('Zip API', function() {

    it('should return 400 if country is missing', function(done) {
        request(app)
            .get('/api/zip//90210') // solicitude sin país
            .expect(400)
            .expect(res => {
                if (!('error' in res.body) || res.body.error !== 'Bad Request') throw new Error("Missing error message");
                if (!('message' in res.body) || res.body.message !== 'Missing required parameters: country') throw new Error("Missing message");
            })
            .end(done);
    });

    it('should return 400 if postal code is missing', function(done) {
        request(app)
            .get('/api/zip/us/') // solicitud sin código postal
            .expect(400)
            .expect(res => {
                if (!('error' in res.body) || res.body.error !== 'Bad Request') throw new Error("Missing error message");
                if (!('message' in res.body) || res.body.message !== 'Missing required parameters: postalCode') throw new Error("Missing message");
            })
            .end(done);
    });

    it('should return 404 if zip information does not exist', function(done) {
        // Se puede simular un escenario donde el servicio lanza un error para un código postal no válido
        request(app)
            .get('/api/zip/us/99999') // Cambia a un código postal no válido
            .expect(404)
            .expect(res => {
                if (!('error' in res.body) || res.body.error !== 'Zip information not found') throw new Error("Missing error message");
            })
            .end(done);
    });

    it('should return zip information when valid country and postal code are provided', function(done) {
        request(app)
            .get('/api/zip/us/90210') // Cambia a un país y código postal válidos
            .expect(200)
            .expect(res => {
                if (res.body.country !== 'US') throw new Error("Country mismatch");
                if (!res.body.places || res.body.places.length === 0) throw new Error("Places should not be empty");
            })
            .end(done);
    });
});
