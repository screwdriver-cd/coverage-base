'use strict';

/* eslint-disable no-underscore-dangle */
class CoverageBase {
    /** Constructor for Coverage plugin
     * @method Constructor
     * @param   {Object}    config  Configuration
     * @return  {CoverageBase}
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Return an access token that build can use to talk to coverage server
     * @method getAccessToken
     * @param   {Object}  buildCredentials    Infomation stored in a build JWT
     * @return  {Promise}                     An access token that build can use to talk to coverage server
     */
    getAccessToken(buildCredentials) {
        return this._getAccessToken(buildCredentials);
    }

    _getAccessToken() {
        return Promise.reject('Not implemented');
    }

    /**
     * Return coverage metadata, such as links to the project and coverage percentage
     * @method getInfo
     * @param   {Object}  config
     * @param   {String}  config.buildId    Screwdriver build ID
     * @param   {String}  config.jobId      Screwdriver job ID
     * @param   {String}  config.startTime  Time the job started
     * @param   {String}  config.endTime    Time the job ended
     * @return  {Promise}                   An object with coverage metadata
     */
    getInfo(config) {
        return this._getInfo(config);
    }

    _getInfo() {
        return Promise.reject('Not implemented');
    }

    /**
     * Get shell command to upload coverage to server
     * @method getUploadCoverageCmd
     * @param   {Object}  config
     * @param   {String}  config.build   build configuration
     * @return {Promise}  Shell commands to upload coverage
     */
    getUploadCoverageCmd(config) {
        if (this.isCoverageEnabled(this.config, config.build) === 'false') {
            const skipMessage = 'Coverage feature is skipped. ' +
                'Set SD_COVERAGE_PLUGIN_ENABLED environment true, if you want to get coverages.';

            return Promise.resolve(`echo ${skipMessage}`);
        }

        return this._getUploadCoverageCmd();
    }

    _getUploadCoverageCmd() {
        return Promise.reject('Not implemented');
    }

    /**
     * Verify to run coverage plugin or not
     * @method isCoverageEnabled
     * @param   {Object}  clusterConfig    Default coverage plugin setting at cluster level.
     * @param   {Object}  buildConfig      Configurations in each builds.
     * @param   {String}  buildConfig.environment.SD_COVERAGE_PLUGIN_ENABLED
     *                    Coverage plugin enable setting by user. It should be 'true' or 'false'.
     * @return {String}   'true' or 'false'
     */
    isCoverageEnabled(clusterConfig, buildConfig) {
        // if user has the configuration, use it
        if (buildConfig.environment &&
            buildConfig.environment.SD_COVERAGE_PLUGIN_ENABLED) {
            return buildConfig.environment.SD_COVERAGE_PLUGIN_ENABLED;
        }

        // if not, use cluster wide default
        return clusterConfig.default;
    }
}

module.exports = CoverageBase;
