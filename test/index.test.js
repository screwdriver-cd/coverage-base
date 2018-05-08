'use strict';

const assert = require('chai').assert;

describe('index test', () => {
    let instance;
    let CoverageBase;

    beforeEach(() => {
        // eslint-disable-next-line global-require
        CoverageBase = require('../index');
        instance = new CoverageBase({});
    });

    afterEach(() => {
        instance = null;
    });

    it('can create an coverage base class instance', () => {
        assert.instanceOf(instance, CoverageBase);
    });

    it('should catch an error for getAccessToken', () => {
        instance.getAccessToken({})
            .then(() => {
                throw new Error('Should not get here');
            }, (err) => {
                assert.isOk(err, 'Error should be returned');
                assert.equal(err.message, 'Not implemented');
            });
    });

    it('should catch an error for getLinks', () => {
        instance.getLinks({})
            .then(() => {
                throw new Error('Should not get here');
            }, (err) => {
                assert.isOk(err, 'Error should be returned');
                assert.equal(err.message, 'Not implemented');
            });
    });

    it('should catch an error for getUploadCoverageCmd', () => {
        instance.getUploadCoverageCmd({})
            .then(() => {
                throw new Error('Should not get here');
            }, (err) => {
                assert.isOk(err, 'Error should be returned');
                assert.equal(err.message, 'Not implemented');
            });
    });
});
