# Install
```
bower install angular-j-auto-complete --save
```

# Usage
First ensure your auto-complete data structure is like:
```
[
    {
        value: 'key',
        data: 'displayName'
    },
    {
        value: 'key2',
        data: 'displayName2'
    },
    ...
]
```
Then, 
```
link(rel='stylesheet', href='/lib/angular-auto-complete/dist/stylesheets/auto-complete.css')
script(type="text/javascript", src="/lib/jquery/dist/jquery.min.js")
script(type="text/javascript", src="/lib/devbridge-autocomplete/dist/jquery.autocomplete.min.js")
script(type="text/javascript", src="/lib/angular-auto-complete/dist/scripts/app.js")
script(type="text/javascript").
    angular.module('yourModule', ['angular-auto-complete'])
        .controller('yourCtrl', ['$scope', function($scope){
            $scope.checkInData = {
                companyName: 'xxx'
            };
        })
    ;


input(type="text", placeholder="公司名称", ng-model="checkInData.companyName", ng-required="true", auto-complete, datasource="availableCompanyNames", min-chars="0")
input(type="text", placeholder="公司名称", ng-model="checkInData.companyName", ng-required="true", auto-complete, datasource="/your/companyName/path", min-chars="0")
```

# Contribution Notice
Run `gulp` after source change to update dist folder
```
gulp
```