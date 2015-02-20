/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name AboutView
     * @constructor
     * @description
     */

    function AboutView() {
        View.apply(this, arguments);

        var surface = new Surface({
            size: [400, 400],
            content: 'About view',
            properties: {
                'background-color': 'red'
            }
        })

        surface.on('click', function () {
            router.set('#home');
        })

        this.add(surface);
    }

    AboutView.prototype = Object.create(View.prototype);
    AboutView.prototype.constructor = AboutView;

    AboutView.DEFAULT_OPTIONS = {
    };

    module.exports = AboutView;
});
