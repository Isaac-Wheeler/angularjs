'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.names = [
  		{
  			'first': 'Tim',
  			'last': 'Mote'
  		},
  		{
  			'first': 'Dan',
  			'last': 'Bean'
  		},
  		{
  			'first': 'Dennis',
  			'last': 'Mote'
  		}
  	];

  	// default oder
  	$scope.orderProp = 'first';
  }])
  .controller('MyCtrl2', [function() {

  }]);