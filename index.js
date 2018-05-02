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
        return this._uploadCoverage();
    }

    _uploadCoverage() {
        return Promise.reject('Not implemented');
    }
}

module.exports = CoverageBase;
