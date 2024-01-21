## I use npm v10.2.4 && nodejs v21.4.0

### Issues

1. Dependency conflict on `npm install` in `stylelint-config-airbnb@0.0.0`

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: stylelint-config-airbnb@0.0.0
npm ERR! Found: stylelint@13.9.0
npm ERR! node_modules/stylelint
npm ERR!   dev stylelint@"^13.9.0" from the root project
npm ERR!   peer stylelint@"^10.0.1 || ^11.0.0 || ^12.0.0 || ^13.0.0" from stylelint-order@4.1.0
npm ERR!   node_modules/stylelint-order
npm ERR!     dev stylelint-order@"^4.1.0" from the root project
npm ERR!   1 more (stylelint-scss)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer stylelint@"^8.0.0" from stylelint-config-airbnb@0.0.0
npm ERR! node_modules/stylelint-config-airbnb
npm ERR!   dev stylelint-config-airbnb@"0.0.0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: stylelint@8.4.0
npm ERR! node_modules/stylelint
npm ERR!   peer stylelint@"^8.0.0" from stylelint-config-airbnb@0.0.0
npm ERR!   node_modules/stylelint-config-airbnb
npm ERR!     dev stylelint-config-airbnb@"0.0.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```

#### Problem description

-   old package `stylelint-config-airbnb@0.0.0` asking for outdated and conflictingwith other packages version of `stylelint`, `stylelint-order` & `stylelint-scss`

#### Solution:

-   for lack of newer than 0.0.0 version of stylelint-config-airbnb package, overriding packages manually is required
    in package.json:

```
"overrides": {
    "stylelint": "^13.9.0",
    "stylelint-order": "^4.1.0",
    "stylelint-scss": "^3.18.0"
  },
```

2. `npm start` on Node v.21.4.0 throws:

```
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:68:19)
    at Object.createHash (node:crypto:138:10)
    at module.exports (/Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/webpack/lib/NormalModule.js:471:10)
    at /Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/webpack/lib/NormalModule.js:503:5
    at /Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/webpack/lib/NormalModule.js:358:12
    at /Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (/Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)
    at /Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9
    at /Users/robertjezyk/Documents/Projects/frontend-technical-test/node_modules/graceful-fs/graceful-fs.js:123:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read/context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

#### Problem description

-   security hole of Node v16 patched in Node v17 is not backward compatible

#### Solution:

-   `npm audit fix --force`, which updates packages that are up-to-date with security fixes, seems to fix the problem

3. `html-webpack-plugin` didn't return html error on `npm start`:

```
ERROR in   Error: The loader "/node_modules/html-webpack-plugin/lib/loader.js!/frontend-technical-test/public/index.html" didn't return html.
```

#### Problem description

-   old incompatible version of `html-webpack-plugin` v4.5.1 listed in package.json

#### Solution:

-   updating package to v4.5.2
