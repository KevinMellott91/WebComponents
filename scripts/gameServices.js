angular.module('gameApp.Services', []).
    factory('gameService', ['$http', function($http) {
        return {
            getGames: function(date, successCallback){
                console.log(date);
                $http.get('http://localhost:3000/games/?date=' + date).
                    success(function(data){
                        successCallback(data);
                    });
            },
            getGame: function(gameId, successCallback){
                $http.get('http://localhost:3000/games/?id=' + gameId).
                    success(function(data){
                        if(data.length == 1){
                            successCallback(data[0]);
                        }
                        else{
                            console.log('Found ' + data.length + ' games.');
                        }
                    });
            }
        }
    }]).
    factory('teamService', ['$http', function($http) {
        return {
            getTeam: function(teamId, successCallback){
                $http.get('http://localhost:3000/teams/?id=' + teamId).
                    success(function(data){
                        if(data.length == 1){
                            successCallback(data[0]);
                        }
                        else{
                            console.log('Found ' + data.length + ' teams.');
                        }
                    });
            }
        }
    }]);