/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name HelloView
     * @constructor
     * @description
     */

    function HelloView() {
        View.apply(this, arguments);

        console.log("HELLO PAGE");

        var surface = new Surface({
            size: [400, 400],
            content: 'Hello view <a href="">TERM</a>',
            properties: {
                'background-color': 'yellow'
            }
        })

        var modify = new StateModifier({
            origin: [.5, .5],
            align: [.5, .5]
        })

        surface.on('click', function () {
            router.set('#about');
        })

        this.add(modify).add(surface);
    }

    HelloView.prototype = Object.create(View.prototype);
    HelloView.prototype.constructor = HelloView;

    HelloView.DEFAULT_OPTIONS = {
    };

    module.exports = HelloView;
});
