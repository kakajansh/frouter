/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name ButtonView
     * @constructor
     * @description
     */

    function ButtonView() {
        View.apply(this, arguments);
    }

    ButtonView.prototype = Object.create(View.prototype);
    ButtonView.prototype.constructor = ButtonView;

    ButtonView.DEFAULT_OPTIONS = {
    };

    module.exports = ButtonView;
});
