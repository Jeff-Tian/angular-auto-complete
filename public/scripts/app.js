angular.module('angular-auto-complete', [])
    .directive('autoComplete', ['$http', '$q', function ($http, $q) {
        return {
            link: function (scope, element, attrs, ngModel) {
                function setupAutoComplete(data) {
                    $(element).autocomplete({
                        lookup: data,
                        minChars: attrs.minChars || 1,
                        onSelect: function (suggestion) {
                            var ngModelString = $(this).attr('ng-model');
                            var a = ngModelString.split('.');

                            scope[a[0]][a[1]] = suggestion.value;
                        }
                    });
                }

                function getData(source, $scope) {
                    if (source.indexOf('http://') === 0 || source.indexOf('https://') === 0 || source.indexOf('//') === 0 || source.indexOf('/') === 0) {
                        return $http.get(source);
                    } else {
                        $scope.$watch(source, function () {
                            setupAutoComplete($scope[source]);
                        });
                        return $q.resolve($scope[source]);
                    }
                }

                var url = attrs.datasource;

                if (url) {
                    getData(url, scope)
                        .then(function (xhr) {
                            setupAutoComplete(xhr.data);
                        });
                }
            }
        };
    }])
;
