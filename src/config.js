var convict = require('convict');

var config = convict({
  events: {
    googleServiceEmail: {
      doc: 'The google email address generated by developer console',
      default: null,
      format: String,
      env: 'GOOGLE_SERVICE_EMAIL'
    },
    googleServiceKeypath: {
      doc: 'Path to service account .PEM file',
      default: null,
      format: String,
      env: 'GOOGLE_SERVICE_KEYPATH'
    }
  }
});

module.exports = config;
