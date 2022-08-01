const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const debug = require('debug')('yaml-env-load');

module.exports = (envPath = '.env') => {
  try {
    const env = yaml.load(fs.readFileSync(envPath, 'utf8'));
    const envs = {
      ...process.env,
      ...env
    }

    Object.defineProperty(process, 'env', {
      value: envs
    })
  } catch (error) {
    if (error.message.includes('no such file or directory'))
      debug(`Environment file ('${path.resolve(envPath)}') not found.`);
    else if (error.name === 'YAMLException')
      debug('Environment file is invalid yaml file.');
    else
      debug('Unexpected error. Please report this exception.');
  }
};