angular.module('mod1',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{templateUrl:'index2.html',controller:'indexcont'})
            .when('/sort',{templateUrl:'sort.html',controller:'sortcont'})
            .when('/detail',{templateUrl:'detail.html',controller:'detailcont'})
    })
.controller('indexcont',function($scope){
        $scope.indexdata = ['苹果X','跑步机','耐克','桌子','围巾'];
    })
.controller('detailcont',function($scope){
        $scope.detail = '这是商品详情的叙述'
    })
.controller('sortcont',function($scope){
    $scope.sortdata = ['日用品','哈哈','呵呵','欧欧']
});