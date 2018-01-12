angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.howto', {
        views: {
            app: {
                controller: 'app_howto',
                templateProvider: function (app) {
                    return app.templateProvider('app.howto');
                }
            }
        }
    }).state('app.infinitescroll', {
        views: {
            app: {
                controller: 'app_infinitescroll',
                templateProvider: function (app) {
                    return app.templateProvider('app.infinitescroll');
                }
            }
        }
    });
});