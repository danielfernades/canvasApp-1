canvasApp.controller('canvasControl', function($scope, $interval) {
	$scope.canvas=document.getElementById('canvas');
	$scope.ctx=$scope.canvas.getContext('2d');

	// $scope.canvas.width = 300;
	// $scope.canvas.height = 300

	$scope.loop=function (){
		$scope.ctx.fillStyle="#FF0000";
		$scope.ctx.fillRect(20,20,150,100);
	};

	$interval(function() {
        $scope.loop();   
    }, 100);
});

