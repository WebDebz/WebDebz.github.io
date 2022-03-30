//
// This file is replaced by the deployment process when
// deployed to the cluster and is only used for local dev
//
(window =>
  window.appConfig = {
    env: 'dev',
    auth: {
      clientId: '422a4235-16db-48c2-b698-1ca745540e55',
      redirectUrl: 'https://la3.dev.priapps.com:8080/'
    },
    endpoints: {
      bff: 'http://localhost:8080/graphql',
      tokens: 'https://pspsdev.primericaonline.com/affwebservices/CASSO/oidc/jm_dev/token',
      authorize: 'https://pspsdev.primericaonline.com/affwebservices/CASSO/oidc/jm_dev/authorize'
    }
  }
)(window);
