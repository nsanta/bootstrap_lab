angular.module("BootstrapLab", [])
.controller("AppCtrl", function($scope){
  $scope.layouts = [
    {name: "fixed", value: 'container'},
    {name: 'fluid', value: 'container-fluid'}
  ];
  $scope.templates = [
    'card',
    'form',
    'menu',
    'bootstrap_template'
  ];
  $scope.layout = $scope.layouts[0];
  $scope.template = $scope.templates[0];

})
