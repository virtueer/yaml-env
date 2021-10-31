const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const debug = require('debug')('yaml-env');

module.exports = (envPath = '.env') => {
  try {
    const env = yaml.load(fs.readFileSync(envPath, 'utf8'));
    for (const key in env) {
      if (Object.hasOwnProperty.call(env, key)) {
        const element = env[key];

        Object.defineProperty(process.env, key, {
          get() { return element; },
        });
      }
    }
  } catch (error) {
    if (error.message.includes('no such file or directory'))
      debug(`Environment file ('${path.resolve(envPath)}') not found.`);
    else if (error.name === 'YAMLException')
      debug('Environment file is invalid yaml file.');
    else
      debug('Unexpected error. Please report this exception.');
  }
};