# yaml-env-load

[![NPM version](https://img.shields.io/npm/v/yaml-env-load.svg?style=flat-square)](https://www.npmjs.com/package/yaml-env-load)

Loads config from yaml file to `process.env`. Unlike other packages, **env can store objects**.


## Install

```bash
# with npm
npm install yaml-env-load

# or with Yarn
yarn add yaml-env-load
```

## Usage

```javascript
const config = require('yaml-env-load')
config('.env.yaml') // if no path is given, it defaults to .env 
```


> env.yaml
```yaml
NODE_ENV: production
db:
  host: localhost
  port: 27017
```

`process.env` now has the keys and values you defined in your `.env.yaml` file.

```javascript
console.log(process.env.db) // returns { host: 'localhost', port: 27017 } AS OBJECT
console.log(process.env.NODE_ENV) // returns production AS STRING
```