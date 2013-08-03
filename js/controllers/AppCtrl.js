'use strict';

fireApp.controller('AppCtrl', ['$scope', 'angularFire', 'logLength', 'fireURL',
    function AppCtrl($scope, angularFire, logLength, fireURL) {

        var promise = angularFire(fireURL, $scope, 'messages', []);

        $scope.addMessage = function () {

            promise.then(function () {

                if ($scope.messages.length >= logLength) {
                    $scope.messages.splice(0, $scope.messages.length - logLength + 1);
                }

                $scope.messages.push({name: $scope.inputName, text: $scope.inputMessage});

                // scroll to bottom of chat
                $(window).scrollTop($(document).height());

                $scope.inputMessage = '';
            });
        }
    }
]);
