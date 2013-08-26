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
  	.controller('MyCtrl2', ['$scope', function ($scope) {
  		$scope.todos = [
  			{
  				'todoItem': 'finish this test app',
  				'done': false
  			},
  			{
  				'todoItem': 'come up with more todos',
  				'done': false
  			}
  		];

  		$scope.returnTotalTodos = function () {
  			return $scope.todos.length;
  		}

  		$scope.addNewTodo = function () {
  			if ($scope.newTodoText.length) {
  				// Add new todo to list
  				$scope.todos.push({
  					'todoItem': $scope.newTodoText,
  					'done': false
  				});

  				// reset the input box
  				$scope.newTodoText = '';
  			}
  		}

  		$scope.clearFinishedTodos = function () {
  			var newTodos = [];
  			$scope.todos.forEach(function (todo) {
  				if (!todo.done) {
  					newTodos.push(todo);
  				}
  			});
  			$scope.todos = newTodos;
  		}
  	}]);