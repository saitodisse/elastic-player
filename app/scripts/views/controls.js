/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    '../playerCommunicator'
], function ($, _, Backbone, JST, playerCommunicator) {
    'use strict';

    var ControlsView = Backbone.View.extend({
        template: JST['app/scripts/templates/controls.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .btnPlay': 'play'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

        play: function() {
            playerCommunicator.trigger('audio:play');
        }
    });

    return ControlsView;
});
