var controllers = require('./index');

module.exports = controllers.controller('ConflictCtrl', [
  '$scope',
  function($scope) {
    // start faked player data
    $scope.players = [
      {
        name: 'Nale',
        conditions: [ 'Hungry', 'Thirsty' ],
        action: 'Attack',
        moves: [
          {
            name: 'Attack',
            skill: 'Fighter',
            level: 4
          },
          {
            name: 'Defend',
            skill: 'Health',
            level: 6
          },
          {
            name: 'Feight',
            skill: 'Fighter',
            level: 4
          },
          {
            name: 'Manuever',
            skill: 'Health',
            level: 6
          }
        ],
        weapon: 'Warhammer'
      }
    ];
    $scope.player = $scope.players[0];
    // end faked player data
    $scope.lock = function() {
      $scope.locked = true;
    }
  }
]);
