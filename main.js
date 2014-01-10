var library = angular.module('library', []);

function bookshelfCTRL ($scope) {
	$scope.location = 'upstairs';
	$scope.books = [{'Java'}, {'Chivalry'}, {'Chicory'}, {'The TARDIS'}];
	$scope.addNewBook = function () {
		$scope.books.push($scope.newBook);
	}
	$scope.removeBook = function (book) {
		for(var i = 0, var max = $scope.books.length; i < max; i++){
			if($scope.books[i] === book) {
				$scope.books.splice(i, 1);
			}
		}
	}
}