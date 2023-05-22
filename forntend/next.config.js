const withCSS = require('@zeit/next-css');

module.exports = withCSS({

    publicRuntimeConfig:{
        APP_NAME:'SEOBLOG',
        API_DEVELOPMENT:"http://localhost:8000/api",
        PRODUCTION:false,
        DOMAIN_DEVELOPMENT:'http://localhost:3000',
        DOMAIN_PRODUCTION:'https://seoblog.com',
        FB_APP_ID: '46456575686778',
        DISQUS_SHORTNAME:'myblog',
        GOOGLE_CLIENT_ID : '23292034268-qtrtss9t33dpf9d0759k5tcb5ekch8cg.apps.googleusercontent.com'
    }
});