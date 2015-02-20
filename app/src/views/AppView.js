/*globals define*/
var router;
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var RenderController = require('famous/views/RenderController');

    var Router = require('frouter/index');
    var HomeView = require('views/HomeView');
    var HelloView = require('views/HelloView');
    var AboutView = require('views/AboutView');

    /*
     * @name AppView
     * @constructor
     * @description
     */

    function AppView() {
        View.apply(this, arguments);

        this.renderController = new RenderController();
        this.pages = [];

        // var aboutView = new AboutView();
        // var helloView = new HelloView();

        router = new Router({
            home: 'home'
        });

        router.add('home',  'homepage');
        router.add('about', 'aboutpage');
        router.add('hello', 'hellopage');

        this.pages['homepage']  = new HomeView();
        this.pages['aboutpage'] = new AboutView();
        this.pages['hellopage'] = new HelloView();

        router.on('change', function(location, params, id) {
            this.renderController.show(this.pages[location.id])
        }.bind(this));

        this.add(this.renderController);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
    };

    module.exports = AppView;
});
