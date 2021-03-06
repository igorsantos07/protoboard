module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'protoboard',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      DEPRECATED_AS_DEBUG: true,
      // Here you can pass flags/options to your application instance when it is created
      applicationId : '9r3cV6ySRli37PHfU9IAqRryEgp3qoJyLjOvJNYq',
      restApiId     : '4jrhTSgtjo8dWviaBj6FyTrnzKFnOqcQXt5xsCti'
    },

    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com sha256-asasa",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'img-src': "'self' www.google-analytics.com",
      'connect-src': "'self' api.parse.com",
      'font-src': "'self' fonts.gstatic.com"
    }
  };

  if (environment === 'development') {
     //ENV.APP.LOG_RESOLVER = true;
     //ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     //ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    var prod = require('./prod/prod.js');
    for (var key in prod.APP) {
      ENV.APP[key] = prod.APP[key];
    }
  }

  return ENV;
};
