angular.module('async.loginController', ['firebase'])

.controller("loginController", ["$scope", "Auth", "SignInState", "$location",
    function($scope, Auth, SignInState, $location) {


        $scope.createUser = function() {
            $scope.message = null;
            $scope.error = null;

            $scope.auth = Auth;

            $scope.auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
                .then(function(userData) {
                    $scope.auth.$signInWithEmailAndPassword($scope.email, $scope.password);
                    $location.path('/providerDash');
                    $scope.message = "User created with uid and logged in: " + userData.uid;
                }).catch(function(error) {
                    $scope.error = error;
                });
        };

        $scope.loginUser = function() {
            $scope.message = null;
            $scope.error = null;
            $scope.auth = Auth;

            $scope.auth.$signInWithEmailAndPassword($scope.email, $scope.password)
                .then(function(authData) {
                    $scope.authData = authData;
                    $scope.message = "User logged in with uid: " + authData.uid;
                    $location.path('/providerDash');
                }).catch(function(error) {
                    $scope.error = error;
                });
        };

        $scope.signInWith = function(provider) {
            $scope.message = null;
            $scope.error = null;

            $scope.auth.$signInWithPopup(provider)
                .then(function(authData) {
                    $scope.authData = authData;
                    $scope.message = "User logged in with uid: " + authData.uid;
                }).catch(function(error) {
                    $scope.error = error;
                });
        };

        Auth.$onAuthStateChanged(function(authData) {
            console.log("authdata BEFORE saving:", SignInState.authData);
            SignInState.authData = authData;
            console.log("authData AFTER saving: ", authData);
            console.log("SignInState.authData SAVED DATA: ", SignInState.authData);
        });
    }
]);