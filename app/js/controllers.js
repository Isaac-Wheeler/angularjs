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
 
  	}])
    .controller('MyCtrl3', ['$scope', function ($scope) {
		
        $scope.math
        
        $scope.equals = function () {
        return $scope.math
        }

  		$scope.domath = function () {
                if ($scope.MathText.length) {
  				$scope.math = $scope.MathText
                $scope.math = $scope.math.trim()
                if ($scope.math.indexOf("+") != -1){
                $scope.math = $scope.math.split("+")
                $scope.math =($scope.math[0] + "+" + $scope.math[1] + "=" + (parseInt($scope.math[0]) + parseInt($scope.math[1])) );
                } else if ($scope.math.indexOf("-") != -1) {
                $scope.math = $scope.math.split("-")
                $scope.math =($scope.math[0] + "-" + $scope.math[1] + "=" + (parseInt($scope.math[0]) - parseInt($scope.math[1])) );
                } else if ($scope.math.indexOf("*") != -1) {
                $scope.math = $scope.math.split("*")
                $scope.math =($scope.math[0] + "*" + $scope.math[1] + "=" + (parseInt($scope.math[0]) * parseInt($scope.math[1])) );
                } else if ($scope.math.indexOf("/") != -1) {
                $scope.math = $scope.math.split("/")
                $scope.math =($scope.math[0] + "/" + $scope.math[1] + "=" + (parseInt($scope.math[0]) / parseInt($scope.math[1])) );
                }
                
                
                
  				}

  				// reset the input box
  				$scope.MathText = ''
  			}
  		}

 
  	]);
    