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

 
          ])
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

