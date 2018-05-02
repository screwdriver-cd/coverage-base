# Coverage Base
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] [![Dependency Status][daviddm-image]][daviddm-url] ![License][license-image]

> Base class defining the interface for coverage upload implementations

## Usage

```bash
npm install screwdriver-screwdriver-coverage-base
```

## Interface
This is a interface for uploading code coverage results from a Screwdriver build to a code coverage server.

### getUploadCoverageCmd
The `getUploadCoverageCmd` function should resolves a Promise with shell commands to upload code coverage results.

## Extending
To extend the base class, the functions to override are:
1. `_getUploadCoverageCmd`

## Testing

```bash
npm test
```

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/screwdriver-screwdriver-coverage-base.svg
[npm-url]: https://npmjs.org/package/screwdriver-screwdriver-coverage-base
[downloads-image]: https://img.shields.io/npm/dt/screwdriver-screwdriver-coverage-base.svg
[license-image]: https://img.shields.io/npm/l/screwdriver-screwdriver-coverage-base.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/screwdriver-coverage-base.svg
[issues-url]: https://github.com/screwdriver-cd/screwdriver-coverage-base/issues
[status-image]: https://cd.screwdriver.cd/pipelines/705/badge
[status-url]: https://cd.screwdriver.cd/pipelines/705
[daviddm-image]: https://david-dm.org/screwdriver-cd/screwdriver-coverage-base.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screwdriver-cd/screwdriver-coverage-base
