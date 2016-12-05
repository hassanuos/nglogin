var app = angular.module('mainApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "loginview.html"
	})
	.when("/dashbord",{
		resolve :{ "check" : function ($location,$rootScope){
				if(!$rootScope.logIn){
					$location.path("/");
				}
			}
		},
		templateUrl: "dashbord.html"
		
	})
	.when("/red", {
        templateUrl : "red.html"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/blue", {
        templateUrl : "blue.html"
    })
	.otherwise({
		redirectTo: "/login"
	})
});

app.controller("loginCtrl",function($scope,$location,$rootScope){
	$scope.submit = function(){
		var uname = $scope.username;
		var pass = $scope.password;
		if(uname == "admin" && pass == "admin"){
			$rootScope.logIn = true;
			$location.path('/dashbord');
			//window.location.hash = "#/dashbord";
		}else{
			alert("Wrong Stuff");
		}
	}
});