/* jshint node: true */
/* global describe, beforeEach, it, expect */
'use strict';
describe('registration on post', function () {

    var extractParticipant;
    var validRequestData = {
        body: {
            firstname: 'Mark',
            lastname: 'Mueller',
            email: 'm.mueller@example.com',
            gender: 'Unicorn'
        }
    };

    beforeEach(function () {
        extractParticipant = require('../routes/registration.js').extractParticipant;
    });

    it('should read firstname from the request body', function () {
        expect(extractParticipant(validRequestData).firstname).toBe('Mark');
    });

    it('should throw an error if no firstname can be found', function () {
        function callWithNoFirstname() {
            extractParticipant({body: {}});
        }

        expect(callWithNoFirstname).toThrow();
    });

    it('should throw an error if no lastname can be found', function () {
        function callWithNoFirstname() {
            extractParticipant({body: {firstName: 'XX'}});
        }

        expect(callWithNoFirstname).toThrow();
    });
    
    it('should throw an error if no email can be found', function () {
        function callWithNoEmail() {
            extractParticipant({body: {firstName: 'XX', lastName: 'YY'}});
        }

        expect(callWithNoEmail).toThrow();
    });

    it('should read lastname from the request body', function () {
        expect(extractParticipant(validRequestData).lastname).toBe('Mueller');
    });

    it('should read email from the request body', function () {
        expect(extractParticipant(validRequestData).email).toBe('m.mueller@example.com');
    });
    
    it('should read gender form the request body', function () {
        expect(extractParticipant(validRequestData).gender).toBe('Unicorn');
    });
});