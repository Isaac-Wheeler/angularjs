'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  	controller('MyCtrl1', ['$scope', function($scope) {
  		$scope.contacts = [
  			{
  				'first': 'Tim',
  				'last': 'Mote',
				'number': '18002672001'
  			},
  			{
  				'first': 'Dan',
  				'last': 'Bean',
				'number': '9192678362'
  			},
  			{
  				'first': 'Dennis',
  				'last': 'Mote',
				'number': '2847590275'
  			}
  		];

  		// default oder
  		$scope.orderProp = 'first';
  	}])
  	.controller('MyCtrl4', ['$scope', function ($scope) {
  		$scope.contacts = [
  			{
  				'name': 'joe',
				'phone' :18002672001,
  				'keep': true,
  			},{
				'name': 'isaac',
				'phone' :9194040444,
  				'keep': true,
				}
  			
  		];
	

  			var newcontacts = [];
  		$scope.deleteSelectedContacts = function () {
			var newList = [];
  			$scope.contacts.forEach(function (contact) {
				if (contact.keep = false){
  					newList.push(contact);
  				}
			});
			$scope.contacts = newList;
		};

  		$scope.returnTotalContacts = function () {
  			return $scope.contacts.length;
  		}

  		$scope.addNewContact = function () {
  			if ($scope.newcontactname.length) {
  				// Add new contact to list
  				$scope.contacts.push({
  					'name': $scope.newcontactname,
					'phone': $scope.newcontactphone,
  					'keep': true
  				});


  				// reset the input box
  				$scope.newcontactText = '';
  			}
  		}
  	}]);