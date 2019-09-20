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

    it('should catch an error for getInfo', () => {
        instance.getInfo({})
            .then(() => {
                throw new Error('Should not get here');
            }, (err) => {
                assert.isOk(err, 'Error should be returned');
                assert.equal(err.message, 'Not implemented');
            });
    });

    it('should catch an error for getUploadCoverageCmd', () => {
        const config = {
            build: {}
        };

        instance.getUploadCoverageCmd(config)
            .then(() => {
                throw new Error('Should not get here');
            }, (err) => {
                assert.isOk(err, 'Error should be returned');
                assert.equal(err.message, 'Not implemented');
            });
    });

    describe('isCoverageEnabled test', () => {
        it('should return true if enabled at cluster level, and buildConfig not defined.', () => {
            const clusterConfig = {
                enabled: 'true'
            };
            const buildConfig = {
                environment: {}
            };

            assert.equal('true',
                instance.isCoverageEnabled(clusterConfig, buildConfig)
            );
        });

        it('should return false if enabled at cluster level, and disabled at buildConfig.', () => {
            const clusterConfig = {
                enabled: 'true'
            };
            const buildConfig = {
                environment: {
                    COVERAGE_PLUGIN_ENABLED: 'false'
                }
            };

            assert.equal('false',
                instance.isCoverageEnabled(clusterConfig, buildConfig)
            );
        });

        it('should return false if disabled at cluster level, and buildConfig not defined.', () => {
            const clusterConfig = {
                enabled: 'false'
            };
            const buildConfig = {
                environment: {}
            };

            assert.equal('false',
                instance.isCoverageEnabled(clusterConfig, buildConfig)
            );
        });

        it('should return true if disabled at cluster level, and enabled at build config.', () => {
            const clusterConfig = {
                enabled: 'false'
            };
            const buildConfig = {
                environment: {
                    COVERAGE_PLUGIN_ENABLED: 'true'
                }
            };

            assert.equal('true',
                instance.isCoverageEnabled(clusterConfig, buildConfig)
            );
        });
    });
});
