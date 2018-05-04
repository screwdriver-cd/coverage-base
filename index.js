'use strict';

/* eslint-disable no-underscore-dangle */
class CoverageBase {
    /** Constructor for Coverage plugin
     * @method Constructor
     * @param {Object}  config  Configuration
     * @return {CoverageBase}
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Get shell command to upload coverage to server
     * @method getUploadCoverageCmd
     * @return {Promise}     Shell commands to upload coverage
     */
    getUploadCoverageCmd() {
        return this._getUploadCoverageCmd();
    }

    _getUploadCoverageCmd() {
        return Promise.reject('Not implemented');
    }

    /**
     * Return an access token that build can use to talk to coverage server
     * @method getAccessToken
     * @param {Object}  buildCredentials    Infomation stored in a build JWT
     * @return {Promise}                    An access token that build can use to talk to coverage server
     */
    getAccessToken(buildCredentials) {
        return this._getAccessToken(buildCredentials);
    }

    _getAccessToken() {
        return Promise.reject('Not implemented');
    }
}

module.exports = CoverageBase;
