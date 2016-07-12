function Hello($scope, $http) {
	//'https://spring_demo.cfapps.sap.hana.ondemand.com/incident'
    $http.get('https://mrspringtest.herokuapp.com/api/greetings').
        success(function(data) {
        	console.log(data);
            $scope.greetings = data.greetings;
        }
	);    
}
