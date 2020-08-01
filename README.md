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
| config           | Object |             |
| config.buildCredentials | Object | Information stored in the build JWT token |
| config.projectKey | String | Project key (can be directly passed in with just startTime and endTime) |
| config.scope | String | Coverage scope (pipeline or job) |
| config.username | String | Project username |

##### Expected Outcome
The `getAccessToken` function should resolve a Promise with an access token that build can use to talk to the code coverage server.

### getInfo
##### Required Parameters
| Parameter        | Type   |  Description |
| :--------------- | :----- | :----------- |
| config           | Object |              |
| config.jobId     | String | The unique ID for a job |
| config.jobName   | String | The Screwdriver job name |
| config.pipelineId | String | The unique ID for a pipeline |
| config.pipelineName | String | The Screwdriver pipeline name |
| config.prNum     | String | The pull request number |
| config.startTime | String | The job start time |
| config.endTime   | String | The job end time |
| config.projectKey | String | Project key (can be directly passed in with just startTime and endTime) |
| config.prParentJobId | String | PR parent job ID |
| config.scope | String | Coverage scope (pipeline or job) |

##### Expected Outcome
The `getInfo` function should resolve a Promise with an object with metadata about the project coverage.

### getUploadCoverageCmd
##### Required Parameters
| Parameter        | Type   |  Description |
| :--------------- | :----- | :----------- |
| config           | Object |              |
| config.build     | String | The build    |
| config.job       | String | The job      |
| config.pipeline  | String | The pipeline |

##### Expected Outcome
The `getUploadCoverageCmd` function should resolve a Promise with a string of shell commands to upload code coverage results.

## Extending
To extend the base class, the functions to override are:
1. `_getAccessToken`
1. `_getInfo`
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
