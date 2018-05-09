# Coverage Base
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] [![Dependency Status][daviddm-image]][daviddm-url] ![License][license-image]

> Base class defining the interface for coverage upload implementations

## Usage

```bash
npm install screwdriver-coverage-base
```

## Interface
This is an interface for uploading code coverage results from a Screwdriver build to a code coverage server.

### getAccessToken
##### Required Parameters
| Parameter        | Type  |  Description |
| :--------------- | :---- | :----------- |
| buildCredentials        | Object | Information stored in the build JWT token |

##### Expected Outcome
The `getAccessToken` function should resolve a Promise with an access token that build can use to talk to the code coverage server.

### getLinks
##### Required Parameters
| Parameter        | Type   |  Description |
| :--------------- | :----- | :----------- |
| config           | Object |              |
| config.buildId   | String | The unique ID for a build |
| config.jobId     | String | The unique ID for a job |

##### Expected Outcome
The `getLinks` function should resolve a Promise with an object with links to the coverage badge and project.

### getUploadCoverageCmd
##### Expected Outcome
The `getUploadCoverageCmd` function should resolve a Promise with a string of shell commands to upload code coverage results.

## Extending
To extend the base class, the functions to override are:
1. `_getAccessToken`
1. `_getLinks`
1. `_getUploadCoverageCmd`


## Testing

```bash
npm test
```

## Related links
See the [coverage-bookend](https://github.com/screwdriver-cd/coverage-bookend)

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/screwdriver-coverage-base.svg
[npm-url]: https://npmjs.org/package/screwdriver-coverage-base
[downloads-image]: https://img.shields.io/npm/dt/screwdriver-coverage-base.svg
[license-image]: https://img.shields.io/npm/l/screwdriver-coverage-base.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/screwdriver-coverage-base.svg
[issues-url]: https://github.com/screwdriver-cd/screwdriver-coverage-base/issues
[status-image]: https://cd.screwdriver.cd/pipelines/705/badge
[status-url]: https://cd.screwdriver.cd/pipelines/705
[daviddm-image]: https://david-dm.org/screwdriver-cd/screwdriver-coverage-base.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screwdriver-cd/screwdriver-coverage-base
