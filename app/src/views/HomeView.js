/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Scrollview = require('famous/views/Scrollview');

    /*
     * @name HomeView
     * @constructor
     * @description
     */

    function HomeView() {
        View.apply(this, arguments);

        _createBackground.call(this);
        _createProfile.call(this);
        _createSets.call(this);
        // this.add(surface);
    }

    HomeView.prototype = Object.create(View.prototype);
    HomeView.prototype.constructor = HomeView;

    HomeView.DEFAULT_OPTIONS = {
    };

    function _createBackground() {
        var surface = new Surface({
            size: [undefined, undefined],
            content: '',
            properties: {
                'background-color': 'red'
            }
        });

        surface.on('click', function () {
            router.set('#hello');
        });

        this.add(surface);
    }

    function _createProfile() {
        this.scrollview = new Scrollview();
        this.surfaces = [];
        this.scrollview.sequenceFrom(this.surfaces);

        var surface = new Surface({
            size: [undefined, 300],
            content: 'Mervas Dayi',
            properties: {
                'background-color': 'yellow',
                'line-height': '300px',
                'text-align': 'center',
                'font-family': 'Roboto',
                'font-size': '2em',
                'font-weight': 300
            }
        });

        this.surfaces.push(surface);

        this.add(this.scrollview);
    }

    function _createSets() {
        for (var i = 0, temp; i < 40; i++) {
            temp = new Surface({
                 content: "Surface: " + (i + 1),
                 size: [undefined, 200],
                 properties: {
                     backgroundColor: "hsl(" + (i * 360 / 40) + ", 100%, 50%)",
                     lineHeight: "200px",
                     textAlign: "center"
                 }
            });

            temp.pipe(this.scrollview);
            this.surfaces.push(temp);
        }
    }

    module.exports = HomeView;
});
