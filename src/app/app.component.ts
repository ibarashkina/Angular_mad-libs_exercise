import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Mad-libs';
  
  noun:string=null;
  adverb:string=null;
  hideTitle:boolean=false;
  // showHide:boolean= false;

  // Cntl1=(hide)=>{
  //   this.hide.boolean = false;
  // }

  // var app = angular.module('myApp', []);
  // app.controller('personCtrl', function($scope) {
  //     $scope.name = "advert",
  //     $scope.name = "noun"
  //     $scope.myVar = false;
  //     $scope.toggle = function() {
  //         $scope.myVar = !$scope.myVar;
  //     };
  // });

  oneCtrl=($scope)=> {
    $scope.hide = "";
}

toggleHeader=()=>{
  this.hideTitle=!this.hideTitle;
};

}
