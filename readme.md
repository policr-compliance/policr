# policr
compliance checks done right

## Availabililty
[![npm](https://policr.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/policr)
[![git](https://policr.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/policr/policr)
[![git](https://policr.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/policr/policr)
[![docs](https://policr.gitlab.io/assets/repo-button-docs.svg)](https://policr.gitlab.io/policr/)

## Status for master
[![build status](https://GitLab.com/policr/policr/badges/master/build.svg)](https://GitLab.com/policr/policr/commits/master)
[![coverage report](https://GitLab.com/policr/policr/badges/master/coverage.svg)](https://GitLab.com/policr/policr/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/policr.svg)](https://www.npmjs.com/package/policr)
[![Dependency Status](https://david-dm.org/policr-compliance/policr.svg)](https://david-dm.org/policr-compliance/policr)
[![bitHound Dependencies](https://www.bithound.io/github/policr-compliance/policr/badges/dependencies.svg)](https://www.bithound.io/github/policr-compliance/policr/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/policr-compliance/policr/badges/code.svg)](https://www.bithound.io/github/policr-compliance/policr)
[![Known Vulnerabilities](https://snyk.io/test/npm/policr/badge.svg)](https://snyk.io/test/npm/policr)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

Policr is an open source cloud compliance tool. It is programmed around the ideas of different kind of checks, that either pass or fail. Those checks can be entirely written in javascript and be run in specific intervals. You may react to failing tests in whatever way you want.

Getting started is as easy as writing a few lines of javascript code.

```typescript
import * as policr from 'policr'

const myPolicr = new Policr()
policr.createDnsCheck({
  name: 'lossless.com',
  type: 'A',
  equals: ''
})

myPolicr.run().then(results: policr.checkresult[] => {

})

```

For further information read the linked docs at the top of this README.

>  licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://policr.gitlab.io/assets/repo-footer.svg)](https://lossless.com)
