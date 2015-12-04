canvasApp.controller('canvasControl', function($scope, $interval,$cordovaDeviceMotion) {
	$scope.canvas=document.getElementById('canvas');
	$scope.ctx=$scope.canvas.getContext('2d');
	$scope.map;
	$scope.tile_size=30;
	$scope.player={loc:{x:10,y:10}};
	$scope.draw={x:0,y:0};
	$scope.key={left:false,up:false,right:false,down:false};
	$scope.camera = {
	    x: 0,
	    y: 0
	};
	$scope.player.vel = {
		x: 0,
	    y: 0
	};
	$scope.viewport = {
        x: 200,
        y: 200
    };
	// $scope.canvas.width = 300;
	// $scope.canvas.height = 300

	$scope.acelerometer=function(){
		document.addEventListener("deviceready", function () {
			 $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
		      $scope.player.loc.x = Math.round((result.x*15)+150);
		      $scope.player.loc.y = Math.round((result.y*15)+50);
		      console.log("x"+$scope.player.loc.x);
		      console.log("y"+$scope.player.loc.y);
		      console.log("z"+Math.round(result.z));
		      var timeStamp = result.timestamp;
		    }, function(err) {
		      // An error occurred. Show a message to the user
		    });
    	}, false);
	};

	$scope.loop=function (){
		console.log($scope.clicked);
		if($scope.clicked==true){
			console.log($scope.draw.x);
			console.log($scope.draw.y);
			$scope.ctx.strokeRect($scope.draw.x, $scope.draw.y, 3, 3);	
		}	
	};

	$scope.canvasClick = function(e) {
		  if($scope.clicked==true){
				if(e.offsetX!==undefined){
				 $scope.draw.x = e.offsetX;
				 $scope.draw.y = e.offsetY;
		      	} else { // Firefox compatibility
		    	  $scope.draw.x = e.layerX - e.currentTarget.offsetLeft;
		    	  $scope.draw.y = e.layerY - e.currentTarget.offsetTop;
		      	}
		      	$scope.draw.x=($scope.draw.x);
		      	$scope.draw.y=($scope.draw.y);
		  }else{
			  // mouseOver(event, $scope.selectMouseLeft);
		  }
	  }
	  $scope.setClicked=function(eventClick){
	  	console.log("event clicked");
		$scope.clicked=eventClick;
	  }

	$interval(function() {
		$scope.loop();   
	}, 100);

});

