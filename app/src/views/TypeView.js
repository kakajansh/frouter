/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name TypeView
     * @constructor
     * @description
     */

    function TypeView() {
        View.apply(this, arguments);
    }

    TypeView.prototype = Object.create(View.prototype);
    TypeView.prototype.constructor = TypeView;

    TypeView.DEFAULT_OPTIONS = {
    };

    module.exports = TypeView;
});
