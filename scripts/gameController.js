angular.module('gameTrackerApp', [])
    .controller('gameController', ['$scope', function($scope){
        $scope.homeTeam = [
            {"number": 1, "name": "S. Varlamov", "position": "G"},
            {"number": 2, "name": "N. Holden", "position": "D"},
            {"number": 4, "name": "T. Barrie", "position": "D"},
            {"number": 5, "name": "N. Guenin", "position": "D"},
            {"number": 6, "name": "E. Johnson", "position": "D"},
            {"number": 8, "name": "J. Hedja", "position": "D"},
            {"number": 9, "name": "M. Duchene", "position": "C"},
            {"number": 11, "name": "J. McGinn", "position": "L"},
            {"number": 12, "name": "J. Iginla", "position": "R"},
            {"number": 17, "name": "B. Stewart", "position": "D"},
            {"number": 24, "name": "M. Cliche", "position": "C"},
            {"number": 25, "name": "M. Talbot", "position": "C"},
            {"number": 29, "name": "N. MacKinnon", "position": "C"},
            {"number": 40, "name": "A. Tanguay", "position": "L"},
            {"number": 45, "name": "D. Everberg", "position": "R"},
            {"number": 48, "name": "D. Briere", "position": "C"},
            {"number": 55, "name": "C. McLeod", "position": "L"},
            {"number": 90, "name": "R. O'Reilly", "position": "C"},
            {"number": 92, "name": "G. Landeskog", "position": "L"}
        ];
        $scope.awayTeam = [
            {"number": 2, "name": "B. Smith", "position": "D"},
            {"number": 4, "name": "J. Kindl", "position": "D"},
            {"number": 8, "name": "J. Abdelkader", "position": "L"},
            {"number": 14, "name": "G. Nyquist", "position": "R"},
            {"number": 15, "name": "R. Sheahan", "position": "C"},
            {"number": 18, "name": "J. Andersson", "position": "C"},
            {"number": 20, "name": "D. Miller", "position": "L"},
            {"number": 21, "name": "T. Tatar", "position": "L"},
            {"number": 26, "name": "J. Jurco", "position": "R"},
            {"number": 27, "name": "K. Quincey", "position": "D"},
            {"number": 35, "name": "J. Howard", "position": "G"},
            {"number": 40, "name": "H. Zetterberg", "position": "L"},
            {"number": 41, "name": "L. Glendening", "position": "C"},
            {"number": 43, "name": "D. Helm", "position": "C"},
            {"number": 49, "name": "A. Nestrasil", "position": "C"},
            {"number": 52, "name": "J. Ericsson", "position": "D"},
            {"number": 55, "name": "N. Kronwall", "position": "D"},
            {"number": 65, "name": "D. DeKeyser", "position": "D"},
            {"number": 93, "name": "J. Franzen", "position": "R"}
        ];
    }]);
