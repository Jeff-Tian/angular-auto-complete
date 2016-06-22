angular.module('angular-auto-complete', [])
    .factory('autocomplete', ['$http', '$q', function ($http, $q) {
        function getData(source, $scope) {
            if (source.indexOf('http://') >= 0 || source.indexOf('https://') >= 0 || source.indexOf('//') >= 0) {
                return $http.get(source);
            } else {
                return $q.resolve($scope[source]);
            }
        }

        return {
            link: function (scope, element, attrs, ngModel) {
                var url = attrs.datasource;

                if (url) {
                    getData(url, scope)
                        .then(function (data) {
                            $(element).autocomplete({
                                lookup: data,
                                onSelect: function (suggestion) {
                                    var ngModelString = $(this).attr('ng-model');
                                    var a = ngModelString.split('.');

                                    scope[a[0]][a[1]] = suggestion.value;
                                }
                            });
                        });
                }
            }
        };
    }])
;