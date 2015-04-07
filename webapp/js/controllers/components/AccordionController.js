'use strict';

define ([
	'mainApp'
	],

	function (mainApp){

		mainApp.controller('AccodionController', function($scope){
			
			console.log('AccodionController Call');

     $scope.oneAtATime = true;

     $scope.groups = [
     {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    
    

  });
	});

