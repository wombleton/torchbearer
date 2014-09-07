var controllers = require('./index');

module.exports = controllers.controller('ConflictCtrl', [
  '$scope',
  function($scope) {
    // start faked player data
    $scope.players = [
      {
        name: 'Nale',
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
        weapon: {
          name: 'Warhammer',
          mods: {
            A: {
              dice: 1
            },
            D: {
              dice: -1
            }
          }
        }
      }
    ];
    // end faked player data
  }
]);
