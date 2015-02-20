/* globals define */
var Yarisma;
define(function(require, exports, module) {
    'use strict';

    // import dependencies
    var Engine = require('famous/core/Engine');
    var AppView = require('views/AppView');

    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);

    Yarisma = new AppView();

    mainContext.add(Yarisma);
});
