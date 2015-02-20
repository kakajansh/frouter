/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous/src',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        frouter: '../lib/famous-router',
        fmediator: '../lib/famous-mediator'

    }
});
require(['main']);
