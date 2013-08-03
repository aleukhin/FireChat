'use strict';

// angular module
var fireApp = angular.module('fireApp', ['firebase']);

// firebase url
fireApp.value('fireURL', 'https://ogawl.firebaseio.com/messages');

// max log length
fireApp.value('logLength', 10);
