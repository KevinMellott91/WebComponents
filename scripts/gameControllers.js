angular.module('gameApp.Controllers', [])
    .controller('gameController', ['$scope', 'gameService', 'teamService', function($scope, gameService, teamService){
        var today = moment('2014-10-21', 'YYYY-MM-DD').format('YYYY-MM-DD');
        gameService.getGames(today, function(gameData){
           console.log(gameData);
           $scope.todaysGames = gameData;
        });
        gameService.getGame(1, function(gameData){
            $scope.game = gameData;
            teamService.getTeam(gameData.homeId, function(teamData){
                $scope.homeTeam = teamData;
            });
            teamService.getTeam(gameData.awayId, function(teamData){
                $scope.awayTeam = teamData;
            });
        });
        $scope.formatTime = function(date, time){
            return moment(date + ' ' + time).format('LT');
        }
    }]);
