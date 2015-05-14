angular.module("pacific",[]);

angular.module("pacific").controller("PacificController", function($scope){
	$scope.array = ["Ljubljana","Maribor","Gradec"];
	$scope.array1 = ["London Gatwick","London Heathrow"];
	$scope.priceFrom = 0;
	$scope.priceTo = 0;
	$scope.$watch("selectedItem", function(newValue){
		switch(newValue){

			case "Ljubljana":
				$scope.priceFrom = 100;
				break;
			case "Maribor":
				$scope.priceFrom = 200;
				break;
			case "Gradec":
				$scope.priceFrom = 300;
				break;
			default:
				$scope.priceFrom = 0;
				break;
		}
	});

	$scope.$watch("selectedItem1", function(newValue){
		switch(newValue){

			case "London Gatwick":
				$scope.priceTo = 100;
				break;
			case "London Heathrow":
				$scope.priceTo = 200;
				break;
			default:
				$scope.priceTo = 0;
				break;
		}
	});
});